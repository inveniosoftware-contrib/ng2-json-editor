import { AddAlwaysShowFieldsPipe } from './add-always-show-fields.pipe';
import { DifferentKeysPipe } from './different-keys.pipe';
import { ErrorsToMessagesHtmlPipe } from './errors-to-message.pipe';
import { FilterByPrefixPipe } from './filter-by-prefix.pipe';
import { FilterAndSortBySchemaPipe } from './filter-and-sort-by-schema.pipe';
import { SelfOrEmptyPipe } from './self-or-empty.pipe';
import { UnderscoreToSpacePipe } from './underscore-to-space.pipe';

export {
  AddAlwaysShowFieldsPipe,
  DifferentKeysPipe,
  ErrorsToMessagesHtmlPipe,
  FilterByPrefixPipe,
  FilterAndSortBySchemaPipe,
  SelfOrEmptyPipe,
  UnderscoreToSpacePipe
};

export const SHARED_PIPES = [
  AddAlwaysShowFieldsPipe,
  DifferentKeysPipe,
  ErrorsToMessagesHtmlPipe,
  FilterByPrefixPipe,
  FilterAndSortBySchemaPipe,
  SelfOrEmptyPipe,
  UnderscoreToSpacePipe
];
