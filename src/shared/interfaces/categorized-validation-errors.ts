import { SchemaValidationErrors } from './schema-validation-errors';

export interface CategorizedValidationErrors {
  Errors: SchemaValidationErrors;
  Warnings: SchemaValidationErrors;
}
