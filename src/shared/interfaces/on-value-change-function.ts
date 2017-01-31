import { NestedStore } from './nested-store';

export interface OnValueChangeFunction {
  (path: Array<any>, value: any, store: NestedStore): void;
}
