import { SchemaValidationProblems } from './schema-validation-problems';

export interface CategorizedValidationProblems {
  errors: SchemaValidationProblems;
  warnings: SchemaValidationProblems;
}
