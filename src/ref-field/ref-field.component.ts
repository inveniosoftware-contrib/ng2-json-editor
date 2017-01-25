/*
 * This file is part of ng2-json-editor.
 * Copyright (C) 2016 CERN.
 *
 * ng2-json-editor is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as
 * published by the Free Software Foundation; either version 2 of the
 * License, or (at your option) any later version.
 *
 * ng2-json-editor is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with ng2-json-editor; if not, write to the Free Software Foundation, Inc.,
 * 59 Temple Place, Suite 330, Boston, MA 02111-1307, USA.
 * In applying this license, CERN does not
 * waive the privileges and immunities granted to it by virtue of its status
 * as an Intergovernmental Organization or submit itself to any jurisdiction.
*/

import {
  Component,
  Input,
  ViewContainerRef,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
  ComponentRef
} from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { DynamicTemplateLoaderService } from '../shared/services';

import { RefConfig } from '../shared/interfaces';

@Component({
  selector: 'ref-field',
  styleUrls: [
    './ref-field.component.scss'
  ],
  templateUrl: './ref-field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RefFieldComponent implements OnChanges {

  @Input() schema: Object;
  @Input() value: Map<string, any>;
  @Input() path: string;

  // shorthand variables to each schema config properties
  isLazy: boolean;
  customTemplate: string;
  requestOptions: RequestOptions;

  refData$: Observable<Object>;
  shouldDisplayWithTemplate: boolean = false;
  isPreviewButtonHidden: boolean = false;
  dynamicTemplateComponentRef: ComponentRef<any>;

  constructor(private viewContainer: ViewContainerRef,
    private http: Http,
    private dynamicTemplateLoaderService: DynamicTemplateLoaderService) { }

  ngOnChanges(changes: SimpleChanges) {
    let valueChange = changes['value'];
    // ngOnInit but needs to run before loading dynamic template
    if (valueChange && valueChange.isFirstChange()) {
      let config: RefConfig = this.schema['refConfig'];
      if (config) {
        this.isLazy = config['lazy'];
        this.customTemplate = config['template'];
        this.requestOptions = new RequestOptions({
          headers: this.createHeadersWithConfig(config)
        });
      }
    }

    // load template if necessary
    this.shouldDisplayWithTemplate = Boolean(this.customTemplate && this.value.get('$ref'));
    if (valueChange && valueChange.currentValue !== valueChange.previousValue && this.shouldDisplayWithTemplate) {
      this.loadTemplateWithRef(false);
    }

    // clear the dynamic template when new $ref is empty or undefined
    if (!this.shouldDisplayWithTemplate && this.dynamicTemplateComponentRef) {
      this.dynamicTemplateComponentRef.instance.context = undefined;
    }
  }

  onPreviewClick() {
    this.loadTemplateWithRef(true);
    this.isPreviewButtonHidden = true;
  }

  /**
   * Displays the template
   * 
   * if the template hasn't loaded, loads the template asyncw with current $ref in this.value
   * then assigns the loaded to this.dynamicTemplateComponentRef
   * 
   * if the template has already loaded, refreshes its context value with the data that
   * is fetched from current $ref in this.value
   * 
   * Note: if called by onPreviewClick, hides the preview button.
   * 
   * 
   * @param {boolean} force - should be set to load the template when it is lazy.
   */
  private loadTemplateWithRef(force: boolean) {
    let ref = this.value.get('$ref');
    this.refData$ = this.http
      .get(ref, this.requestOptions)
      .map(res => res.json())
      .catch(error => {
        console.warn(error);
        return Observable.of({ error });
      });
    if (!this.isLazy || force) {
      if (!this.dynamicTemplateComponentRef) {
        this.dynamicTemplateLoaderService.loadTemplate(this.customTemplate, this.refData$, this.viewContainer)
          .then(componentRef => {
            this.dynamicTemplateComponentRef = componentRef;
          });
      } else {
        this.dynamicTemplateComponentRef.instance.context = this.refData$;
      }
    } else {
      this.isPreviewButtonHidden = false;
      if (this.dynamicTemplateComponentRef) {
        this.dynamicTemplateComponentRef.instance.context = undefined;
      }
    }
  }

  private createHeadersWithConfig(config: RefConfig): Headers {
    let headers = new Headers();
    config.headers
      .forEach(header => headers.append(header.name, header.value));
    return headers;
  }
}
