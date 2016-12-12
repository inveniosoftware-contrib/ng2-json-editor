import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { List } from 'immutable';

import { DomUtilService, EmptyValueService, JsonStoreService } from '../shared/services';

@Component({
  selector: 'add-new-element-button',
  styleUrls: [
    './add-new-element-button.component.scss'
  ],
  templateUrl: './add-new-element-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddNewElementButtonComponent {

  @Input() path: Array<any>;
  @Input() schema: Object;

  constructor(public domUtilService: DomUtilService,
    public emptyValueService: EmptyValueService,
    public jsonStoreService: JsonStoreService) { }

  addNewElement() {
    let itemSchema = this.schema['items'];
    let emptyValue = this.emptyValueService.generateEmptyValue(itemSchema);
    let values: List<any> = this.jsonStoreService.getIn(this.path) || List();
    this.jsonStoreService.setIn(this.path, values.push(emptyValue));
    // focus on the new added element
    let newElementPath = this.path
      .concat(values.size)
      .join('.');
    setTimeout(() =>
      this.domUtilService.focusAndSelectFirstInputChildById(newElementPath)
    );
  }

}
