import { JsonPatch } from './json-patch';

export interface JsonPatchesByOp {
  add: Array<JsonPatch>;
  remove: Array<JsonPatch>;
  replace: Array<JsonPatch>;
}
