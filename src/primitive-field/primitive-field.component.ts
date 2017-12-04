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
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnDestroy,
  OnInit
} from '@angular/core';

import { AbstractFieldComponent } from '../abstract-field';
import {
  AppGlobalsService,
  ErrorsService,
  ComponentTypeService,
  JsonStoreService,
  KeysStoreService,
  SchemaValidationService,
  PathUtilService,
  DomUtilService
} from '../shared/services';
import { JSONSchema, JsonPatch } from '../shared/interfaces';
import { Subscription } from 'rxjs/Subscription';
import { ValidationError } from '../shared/interfaces';

@Component({
  selector: 'primitive-field',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './primitive-field.component.scss'
  ],
  templateUrl: './primitive-field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrimitiveFieldComponent extends AbstractFieldComponent implements OnInit, OnDestroy {

  @Input() schema: JSONSchema;
  @Input() path: Array<any>;
  @Input() value: string | number | boolean;

  internalErrors: Array<ValidationError> = [];
  private lastCommitedValue: string | number | boolean;

  constructor(public schemaValidationService: SchemaValidationService,
    public componentTypeService: ComponentTypeService,
    public appGlobalsService: AppGlobalsService,
    public errorsService: ErrorsService,
    public jsonStoreService: JsonStoreService,
    public keysStoreService: KeysStoreService,
    public pathUtilService: PathUtilService,
    public domUtilService: DomUtilService,
    public changeDetectorRef: ChangeDetectorRef) {
    super(appGlobalsService, errorsService, pathUtilService, changeDetectorRef, jsonStoreService);
  }

  ngOnInit() {
    super.ngOnInit();

    if (this.value !== this.schema.default) {
      this.lastCommitedValue = this.value;
    }
    this.errorsService
      .internalCategorizedErrors$
      .takeUntil(this.isDestroyed)
      .subscribe(internalCategorizedErrorMap => {
        this.internalErrors = internalCategorizedErrorMap.errors[this.pathString] || [];
      });
    this.appGlobalsService
      .adminMode$
      .takeUntil(this.isDestroyed)
      .subscribe(adminMode => {
        this.changeDetectorRef.markForCheck();
      });
    this.validate();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    if (this.internalErrors.length > 0) {
      this.errorsService.extendInternalErrors(this.pathString, []);
    }
  }

  commitValueChange() {
    this.validate();
    this.lastCommitedValue = this.value;
    this.jsonStoreService.setIn(this.path, this.value);

    if (this.schema.onValueChange) {
      // setTimeout to workaround the case when the value is changed back to previous value inside onValuChange callback
      setTimeout(() =>
        this.schema.onValueChange(this.path, this.value, this.jsonStoreService, this.keysStoreService)
      );
    }
  }

  onBlur() {
    this.domUtilService.clearHighlight();

    if (this.value !== this.lastCommitedValue) {
      this.commitValueChange();
    }
  }

  onKeypress(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      (document.activeElement as HTMLElement).blur();
    }
  }

  onValueChange(value: string) {
    this.value = value;
  }

  onSearchableDropdownSelect(value: string) {
    this.value = value;
    this.commitValueChange();
  }

  get tabIndex(): number {
    return this.disabled ? -1 : 1;
  }

  get tooltipPosition(): string {
    if (this.pathString.startsWith(this.appGlobalsService.firstElementPathForCurrentTab)) {
      return 'bottom';
    } else {
      return 'top';
    }
  }

  hasErrors(): boolean {
    return super.hasErrors() || this.internalErrors.length > 0;
  }

  get errorClass(): string {
    return !this.jsonPatches[0] && this.hasErrors() ? 'error' : '';
  }

  get isPathToAnIndex(): boolean {
    return typeof this.path[this.path.length - 1] === 'number';
  }

  private validate() {
    // don't validate if value is empty
    if (this.value) {
      this.internalErrors = this.schemaValidationService.validateValue(this.value, this.schema);
      this.errorsService.extendInternalErrors(this.pathString, this.internalErrors);
    }
  }

}
