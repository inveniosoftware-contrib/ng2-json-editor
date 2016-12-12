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

import { NgModule } from '@angular/core';

// TODO: investigate if all modules or only used ones are in the bundle of the example app.
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AddFieldDropdownComponent } from './add-field-dropdown';
import { AddNewElementButtonComponent } from './add-new-element-button';
import { AnyTypeFieldComponent } from './any-type-field';
import { AutocompleteInputComponent } from './autocomplete-input';
import { ComplexListFieldComponent } from './complex-list-field';
import { EditorPreviewerComponent } from './editor-previewer';
import { HtmlViewComponent } from './html-view';
import { JsonEditorComponent } from './json-editor.component';
import { ObjectFieldComponent } from './object-field';
import { ValueChangeWatcherComponent } from './value-change-watcher';
import { PrimitiveListFieldComponent } from './primitive-list-field';
import { PrimitiveFieldComponent } from './primitive-field';
import { RefFieldComponent } from './ref-field';
import { TableListFieldComponent } from './table-list-field';
import { TitleDropdownComponent } from './title-dropdown';
import {
  TreeMenuComponent,
  TreeMenuItemComponent
} from './tree-menu';
import { SearchableDropdownComponent } from './searchable-dropdown';

import { SHARED_PIPES, SHARED_SERVICES, SHARED_DIRECTIVES } from './shared';

@NgModule({
  declarations: [
    ...SHARED_PIPES,
    ...SHARED_DIRECTIVES,
    AddFieldDropdownComponent,
    AddNewElementButtonComponent,
    AnyTypeFieldComponent,
    AutocompleteInputComponent,
    ComplexListFieldComponent,
    ObjectFieldComponent,
    ValueChangeWatcherComponent,
    EditorPreviewerComponent,
    PrimitiveListFieldComponent,
    PrimitiveFieldComponent,
    RefFieldComponent,
    SearchableDropdownComponent,
    TableListFieldComponent,
    TitleDropdownComponent,
    TreeMenuItemComponent,
    TreeMenuComponent,
    JsonEditorComponent,
    HtmlViewComponent
  ],
  exports: [JsonEditorComponent],
  imports: [
    Ng2BootstrapModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: SHARED_SERVICES
})
export class JsonEditorModule { }
