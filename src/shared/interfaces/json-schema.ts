import { SchemaOption } from './schema-option';

export interface JSONSchema extends SchemaOption {
  type?: string;
  id?: string;
  $schema?: string;
  title?: string;
  description?: string;
  multipleOf?: number;
  maximum?: number;
  exclusiveMaximum?: boolean;
  minimum?: number;
  exclusiveMinimum?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  format?: string;
  items?: JSONSchema;
  maxItems?: number;
  minItems?: number;
  uniqueItems?: boolean;
  maxProperties?: number;
  minProperties?: number;
  required?: Array<string>;
  properties?: {
    [key: string]: JSONSchema
  };
  dependencies?: {
    [key: string]: JSONSchema | Array<string>
  };
  enum?: Array<any>;
  allOf?: Array<JSONSchema>;
  anyOf?: Array<JSONSchema>;
  oneOf?: Array<JSONSchema>;
  not?: JSONSchema;
  // custom properties
  componentType?: string;
}
