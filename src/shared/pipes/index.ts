import { AddAlwaysShowFieldsPipe } from './add-always-show-fields.pipe';
import { DifferentKeysPipe } from './different-keys.pipe';
import { FilterByExpressionPipe } from './filter-by-expression.pipe';
import { FilterAndSortBySchemaPipe } from './filter-and-sort-by-schema.pipe';
import { SanitizeUrlPipe } from './sanitize-url.pipe';
import { SelfOrEmptyPipe } from './self-or-empty.pipe';
import { UnderscoreToSpacePipe } from './underscore-to-space.pipe';

export {
  AddAlwaysShowFieldsPipe,
  DifferentKeysPipe,
  FilterByExpressionPipe,
  FilterAndSortBySchemaPipe,
  SanitizeUrlPipe,
  SelfOrEmptyPipe,
  UnderscoreToSpacePipe
};

export const SHARED_PIPES = [
  AddAlwaysShowFieldsPipe,
  DifferentKeysPipe,
  FilterByExpressionPipe,
  FilterAndSortBySchemaPipe,
  SanitizeUrlPipe,
  SelfOrEmptyPipe,
  UnderscoreToSpacePipe
];
