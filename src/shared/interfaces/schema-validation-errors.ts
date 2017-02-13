export interface SchemaValidationErrors {
  [jsonPointer: string]: Array<{
    message: string;
  }>;
}
