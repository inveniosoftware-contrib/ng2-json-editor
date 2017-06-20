import { KeysStoreService, JsonStoreService } from '../services';

export type OnValueChangeFunction = (path: Array<any>, value: any, jsonStore: JsonStoreService, keysStore: KeysStoreService) => void;
