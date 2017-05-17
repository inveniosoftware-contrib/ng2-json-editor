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
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnChanges,
  SimpleChanges,
  TemplateRef
} from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { AppGlobalsService, PathUtilService } from '../shared/services';
import { RefConfig, JSONSchema, RefAnchorAttributes } from '../shared/interfaces';

@Component({
  selector: 'ref-field',
  styleUrls: [
    './ref-field.component.scss'
  ],
  templateUrl: './ref-field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RefFieldComponent implements OnChanges {

  @Input() schema: JSONSchema;
  @Input() value: Map<string, string>;
  @Input() path: Array<any>;

  refData: Object;
  requestOptions: RequestOptions;

  isPreviewButtonHidden = false;

  private anchorAttributes: RefAnchorAttributes;

  constructor(private http: Http,
    private changeDetectorRef: ChangeDetectorRef,
    private appGlobalsService: AppGlobalsService,
    private pathUtilService: PathUtilService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (this.refConfig) {
      let valueChange = changes['value'];
      let schemaChange = changes['schema'];

      if (valueChange && this.refConfig && this.refConfig.anchorBuilder && this.ref) {
        this.anchorAttributes = this.refConfig.anchorBuilder(this.ref);
      }

      // instead of ngOnInit because requestOptions has to be set before fetching
      if (schemaChange && schemaChange.isFirstChange()) {
        this.requestOptions = this.createRequestOptionsWithConfig();
      }

      if (valueChange && this.isTemplateEnabled) {
        if (this.refConfig.lazy) {
          this.isPreviewButtonHidden = false;
        } else {
          this.fetchRef();
        }
      }
    }
  }

  onPreviewClick() {
    this.isPreviewButtonHidden = true;
    this.fetchRef();
  }

  get pathString() {
    return this.pathUtilService.toPathString(this.path);
  }

  get customTemplate(): TemplateRef<any> {
    return this.appGlobalsService.templates[this.refConfig.templateName];
  }

  get refConfig(): RefConfig {
    return this.schema.refFieldConfig;
  }

  get ref(): string {
    return this.value.get('$ref');
  }

  get anchorHref(): string {
    return this.anchorAttributes ? this.anchorAttributes.href : this.ref;
  }

  get anchorDisplay(): string {
    return this.anchorAttributes ? this.anchorAttributes.display : this.ref;
  }

  get isTemplateEnabled(): boolean {
    return this.refConfig !== undefined && this.refConfig.templateName !== undefined;
  }

  get shouldDisplayTemplate(): boolean {
    return this.isPreviewButtonHidden || !this.refConfig.lazy;
  }

  private fetchRef() {
    this.refData = undefined;
    this.http
      .get(this.ref, this.requestOptions)
      .map(res => res.json())
      .catch(error => {
        return Observable.of({ $error: error });
      }).subscribe(data => {
        this.refData = data;
        this.changeDetectorRef.markForCheck();
      });
  }

  private createRequestOptionsWithConfig(): RequestOptions {
    let headers = new Headers();
    if (this.refConfig.headers) {
      this.refConfig.headers
        .forEach(header => headers.append(header.name, header.value));
    }
    return new RequestOptions({ headers });
  }
}
