import { AppGlobalsService } from './app-globals.service';
import { RemoteAutocompletionService } from './remote-autocompletion.service';
import { ComponentTypeService } from './component-type.service';
import { DomUtilService } from './dom-util.service';
import { EmptyValueService } from './empty-value.service';
import { FindReplaceAllService } from './find-replace-all.service';
import { JsonStoreService } from './json-store.service';
import { JsonUtilService } from './json-util.service';
import { JsonSchemaService } from './json-schema.service';
import { KeysStoreService } from './keys-store.service';
import { PathUtilService } from './path-util.service';
import { ModalService } from './modal.service';
import { RecordFixerService } from './record-fixer.service';
import { SchemaFixerService } from './schema-fixer.service';
import { SchemaValidationService } from './schema-validation.service';
import { ShortcutActionService } from './shortcut-action.service';
import { WindowHrefService } from './window-href.service';
import { TabsUtilService } from './tabs-util.service';
import { ErrorsService } from './errors.service';
import { KatexService } from './katex.service';
import { TextDiffService } from './text-diff.service';
import { ListPageChangerService } from './list-page-changer.service';

export {
  AppGlobalsService,
  RemoteAutocompletionService,
  ComponentTypeService,
  DomUtilService,
  EmptyValueService,
  FindReplaceAllService,
  JsonStoreService,
  JsonUtilService,
  JsonSchemaService,
  KeysStoreService,
  PathUtilService,
  ModalService,
  RecordFixerService,
  SchemaFixerService,
  SchemaValidationService,
  ShortcutActionService,
  WindowHrefService,
  TabsUtilService,
  ErrorsService,
  KatexService,
  TextDiffService,
  ListPageChangerService
};

export const SHARED_SERVICES = [
  AppGlobalsService,
  RemoteAutocompletionService,
  ComponentTypeService,
  DomUtilService,
  EmptyValueService,
  FindReplaceAllService,
  JsonStoreService,
  JsonUtilService,
  KeysStoreService,
  JsonSchemaService,
  PathUtilService,
  ModalService,
  RecordFixerService,
  SchemaFixerService,
  SchemaValidationService,
  ShortcutActionService,
  WindowHrefService,
  TabsUtilService,
  ErrorsService,
  KatexService,
  TextDiffService,
  ListPageChangerService
];
