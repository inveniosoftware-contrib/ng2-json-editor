import { AddAlwaysShowFieldsPipe } from './add-always-show-fields.pipe';
import { DifferentKeysPipe } from './different-keys.pipe';
import { FilterByExpressionPipe } from './filter-by-expression.pipe';
import { FilterHiddenFieldsPipe } from './filter-hidden-fields.pipe';
import { SanitizeUrlPipe } from './sanitize-url.pipe';
import { SelfOrEmptyPipe } from './self-or-empty.pipe';
import { UnderscoreToSpacePipe } from './underscore-to-space.pipe';
import { SetFirstElementPathPipe } from './set-first-element-path.pipe';
import { SortAlphabeticallyPipe } from './sort-alphabetically.pipe';
import { KeysPipe } from './keys-pipe';
import { LastPathElementPipe } from './last-path-element.pipe';
import { TypeOfPipe } from './type-of.pipe';

export {
  AddAlwaysShowFieldsPipe,
  DifferentKeysPipe,
  FilterByExpressionPipe,
  FilterHiddenFieldsPipe,
  SanitizeUrlPipe,
  SelfOrEmptyPipe,
  UnderscoreToSpacePipe,
  SetFirstElementPathPipe,
  SortAlphabeticallyPipe,
  KeysPipe,
  LastPathElementPipe,
  TypeOfPipe
};

export const SHARED_PIPES = [
  AddAlwaysShowFieldsPipe,
  DifferentKeysPipe,
  FilterByExpressionPipe,
  FilterHiddenFieldsPipe,
  SanitizeUrlPipe,
  SelfOrEmptyPipe,
  UnderscoreToSpacePipe,
  SetFirstElementPathPipe,
  SortAlphabeticallyPipe,
  KeysPipe,
  LastPathElementPipe,
  TypeOfPipe
];
