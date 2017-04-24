import { ValidationError } from './validation-error';

export interface SchemaValidationErrors {
  [jsonPointer: string]: Array<ValidationError>;
}
