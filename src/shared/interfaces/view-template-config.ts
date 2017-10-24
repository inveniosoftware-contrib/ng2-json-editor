import { Map } from 'immutable';

export interface ViewTemplateConfig {
    /**
     * Template to be used represent list item if `showEditForm` returns false
     *
     * Used for complex list fields only (list of nested objects).
     * The template needs to be defined with <ng-template #myTemplate></ng-template> and passed to the json-editor like so:
     * <json-editor [templates]="{myTemplate: myTemplate}"></json-editor>
     *
     * - template parameter: `item: Immutable.Map<string, any>`
     */
    itemTemplateName: string;
    /**
     * Used for complex list fields only (list of nested objects).
     * Function that receives an immutable Map representing the JSON document and returns:
     * - true if the fields to edit should be visible by default
     * - false if the fields to edit should be hidden by default
     */
    showEditForm: (item: Map<string, any>) => boolean;
  }
