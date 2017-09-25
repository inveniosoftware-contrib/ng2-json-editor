import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { List } from 'immutable';


import { DomUtilService, EmptyValueService, JsonStoreService, PathUtilService, KeysStoreService } from '../shared/services';
import { JSONSchema } from '../shared/interfaces';

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
  @Input() schema: JSONSchema;

  constructor(public domUtilService: DomUtilService,
    public emptyValueService: EmptyValueService,
    public jsonStoreService: JsonStoreService,
    public pathUtilService: PathUtilService,
    public keyStoreService: KeysStoreService) { }

  addNewElement() {
    const itemSchema = this.schema.items;
    const emptyValue = this.emptyValueService.generateEmptyValue(itemSchema);
    const values: List<any> = this.jsonStoreService.getIn(this.path);
    const insertIndex = values ? values.size : 0;
    const insertPath = this.path.concat(insertIndex);
    this.jsonStoreService.addIn(insertPath, emptyValue);
    // focus on the new added element
    const insertPathString = this.pathUtilService.toPathString(insertPath);
    setTimeout(() => {
      this.domUtilService.focusAndSelectFirstEditableChildById(insertPathString);
    });
  }

}
