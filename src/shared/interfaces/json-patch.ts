export interface JsonPatch {
  op: string;
  path: string;
  from?: string;
  value?: any;
}
