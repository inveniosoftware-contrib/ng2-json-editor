import { SchemaValidationErrors } from './schema-validation-errors';

export interface CategorizedValidationErrors {
  errors: SchemaValidationErrors;
  warnings: SchemaValidationErrors;
}
