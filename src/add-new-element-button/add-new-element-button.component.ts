import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { List } from 'immutable';

import { EmptyValueService, JsonStoreService } from '../shared/services';

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

  constructor(public emptyValueService: EmptyValueService,
    public jsonStoreService: JsonStoreService) { }

  get tooltipName(): string {
    return this.path[this.path.length - 1];
  }

  addNewElement() {
    let itemSchema = this.schema['items'];
    let emptyValue = this.emptyValueService.generateEmptyValue(itemSchema);
    let values = this.jsonStoreService.getIn(this.path) || List.of([]);
    this.jsonStoreService.setIn(this.path, values.push(emptyValue));
  }

}
