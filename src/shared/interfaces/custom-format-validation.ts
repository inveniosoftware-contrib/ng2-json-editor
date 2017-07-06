export interface CustomFormatValidation {
  /**
   * The name of the new added format. The value is a function that receives the
   * value to be checked and returns a boolean regarding if is a valid format or not.
   * Note: If an existing format is provided it will override the
   * default behaviour. See <https://github.com/epoberezkin/ajv#formats> for existing formats.
   */
  [format: string]: {
    formatChecker: (value: any) => boolean;
  };
}
