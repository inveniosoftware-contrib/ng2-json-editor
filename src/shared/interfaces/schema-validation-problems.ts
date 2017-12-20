import { ValidationProblem } from './validation-problem';

export interface SchemaValidationProblems {
  [jsonPointer: string]: Array<ValidationProblem>;
}
