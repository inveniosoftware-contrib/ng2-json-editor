import { NestedStore } from './nested-store';

export type OnValueChangeFunction = (path: Array<any>, value: any, store: NestedStore) => void;
