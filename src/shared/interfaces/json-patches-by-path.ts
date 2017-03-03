import { JsonPatch } from './json-patch';

export interface JsonPatchesByPath {
  [path: string]: Array<JsonPatch>;
}

