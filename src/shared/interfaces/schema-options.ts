import { SchemaOption } from './schema-option';

export interface SchemaOptions extends SchemaOption {
  properties?: {
    [prop: string]: SchemaOptions;
  };
  items?: SchemaOptions;
  allOf?: Array<SchemaOptions>;
  anyOf?: Array<SchemaOptions>;
}
