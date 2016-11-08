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

import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { DynamicTemplateLoaderService } from '../shared/services';

@Component({
  selector: 'ref-field',
  styleUrls: [
    './ref-field.component.scss'
  ],
  templateUrl: './ref-field.component.html'
})
export class RefFieldComponent implements OnInit {

  @Input() schema: Object;
  @Input() refValue: string;
  @Input() path: string;

  refData$: Observable<Object>;
  isLazy: boolean;
  customTemplate: string;
  shouldDisplayWithTemplate: boolean = false;

  constructor(private viewContainer: ViewContainerRef,
    private http: Http,
    private dynamicTemplateLoaderService: DynamicTemplateLoaderService) { }

  ngOnInit() {
    if (this.schema['x_editor_ref_config']) {
      this.isLazy = this.schema['x_editor_ref_config']['lazy'];
      this.customTemplate = this.schema['x_editor_ref_config']['template'];
      this.shouldDisplayWithTemplate = Boolean(this.customTemplate && this.refValue);
      if (this.shouldDisplayWithTemplate) {
        this.refData$ = this.http
          .get(this.refValue)
          .map(res => res.json());
        if (!this.isLazy) {
          this.dynamicTemplateLoaderService.loadTemplate(this.customTemplate, this.refData$, this.viewContainer);
        }
      }
    }
  }

  onPreviewClick(event: Event) {
    this.dynamicTemplateLoaderService.loadTemplate(this.customTemplate, this.refData$, this.viewContainer);
    (event.target as HTMLElement).remove();
  }
}
