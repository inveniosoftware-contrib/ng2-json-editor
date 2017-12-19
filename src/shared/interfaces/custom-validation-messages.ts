export interface CustomValidationMessages {
  pattern?: string;
  format?: string;
  multipleOf?: string;
  maximum?: string;
  exclusiveMaximum?: string;
  minimum?: string;
  exclusiveMinimum?: string;

  /**
   * Schema validation for pritimive types so below is not supported yet
   *  maxLength?: string;
   *  minLength?: string;
   *  maxItems?: string;
   *  minItems?: string;
   *  uniqueItems?: string;
   *  maxProperties?: string;
   *  minProperties?: string;
   */
}
