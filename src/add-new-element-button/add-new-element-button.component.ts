import { Component, Input, Output, EventEmitter } from '@angular/core';

import { EmptyValueService } from '../shared/services';

@Component({
  selector: 'add-new-element-button',
  styleUrls: [
    './add-new-element-button.component.scss'
  ],
  templateUrl: './add-new-element-button.component.html'
})
export class AddNewElementButtonComponent {

  @Input() key: string;
  @Input() values: Array<any>;
  @Input() schema: Object;

  @Output() onNewElementAdd: EventEmitter<any> = new EventEmitter<any>();

  constructor(private emptyValueService: EmptyValueService) { }

  addNewElement() {
    let itemSchema = this.schema['items'];
    let emptyValue = this.emptyValueService.generateEmptyValue(itemSchema);
    this.values.push(emptyValue);
    this.onNewElementAdd.emit(this.values);
  }

}
