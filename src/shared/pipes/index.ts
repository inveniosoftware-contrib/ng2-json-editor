import { DifferentKeysPipe } from './different-keys.pipe';
import { ErrorsToMessagesHtmlPipe } from './errors-to-message.pipe';
import { FilterByPrefixPipe } from './filter-by-prefix.pipe';
import { MapToSortedIterablePipe } from './map-to-sorted-iterable.pipe';
import { UnderscoreToSpacePipe } from './underscore-to-space.pipe';

export {
  DifferentKeysPipe,
  ErrorsToMessagesHtmlPipe,
  FilterByPrefixPipe,
  MapToSortedIterablePipe,
  UnderscoreToSpacePipe
};

export const SHARED_PIPES = [
  DifferentKeysPipe,
  ErrorsToMessagesHtmlPipe,
  FilterByPrefixPipe,
  MapToSortedIterablePipe,
  UnderscoreToSpacePipe
];
