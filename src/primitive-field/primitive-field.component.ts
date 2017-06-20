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
  ComponentTypeService,
  JsonStoreService,
  SchemaValidationService,
  PathUtilService,
  DomUtilService
} from '../shared/services';
import { JSONSchema } from '../shared/interfaces';
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
  internalCategorizedErrorSubscription: Subscription;
  private lastCommitedValue: string | number | boolean;

  constructor(public schemaValidationService: SchemaValidationService,
    public componentTypeService: ComponentTypeService,
    public appGlobalsService: AppGlobalsService,
    public jsonStoreService: JsonStoreService,
    public pathUtilService: PathUtilService,
    public domUtilService: DomUtilService,
    public changeDetectorRef: ChangeDetectorRef) {
    super(appGlobalsService, pathUtilService, changeDetectorRef);
    this.appGlobalsService.adminMode$.subscribe(adminMode => {
      this.changeDetectorRef.markForCheck();
    });
  }

  ngOnInit() {
    super.ngOnInit();
    this.lastCommitedValue = this.value;
    this.internalCategorizedErrorSubscription = this.appGlobalsService
      .internalCategorizedErrorsSubject
      .subscribe(internalCategorizedErrorMap => {
        this.internalErrors = internalCategorizedErrorMap.Errors[this.pathString] || [];
      });
    this.validate();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    if (this.internalErrors.length > 0) {
      this.appGlobalsService.extendInternalErrors(this.pathString, []);
    }
    this.internalCategorizedErrorSubscription.unsubscribe();
  }

  commitValueChange() {
    this.validate();
    this.lastCommitedValue = this.value;
    this.jsonStoreService.setIn(this.path, this.value);

    if (this.schema.onValueChange) {
      this.schema.onValueChange(this.path, this.value, this.jsonStoreService);
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
    return this.schema.disabled ? -1 : 1;
  }

  get tooltipPosition(): string {
    let tooltipPlacement = 'top';
    if (this.pathString.startsWith(this.appGlobalsService.firstElementPathForCurrentTab)) {
      tooltipPlacement = 'bottom';
    }
    return tooltipPlacement;
  }

  get disabled(): boolean {
    return this.schema.disabled && !this.appGlobalsService.adminMode;
  }

  get disabledClass(): string {
    return this.disabled ? 'disabled' : '';
  }

  hasErrors(): boolean {
    return super.hasErrors() || this.internalErrors.length > 0;
  }

  private validate() {
    // don't validate if value is empty
    if (this.value) {
      this.internalErrors = this.schemaValidationService.validateValue(this.value, this.schema);
      this.appGlobalsService.extendInternalErrors(this.pathString, this.internalErrors);
    }
  }

}
