export interface SchemaValidationErrors {
  [dotSeparatedPath: string]: Array<{
    message: string;
  }>;
}
