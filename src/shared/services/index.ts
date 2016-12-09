import { AppGlobalsService } from './app-globals.service';
import { RemoteAutocompletionService } from './remote-autocompletion.service';
import { ComponentTypeService } from './component-type.service';
import { DomUtilService } from './dom-util.service';
import { DynamicTemplateLoaderService } from './dynamic-template-loader.service';
import { EmptyValueService } from './empty-value.service';
import { JsonStoreService } from './json-store.service';
import { JsonUtilService } from './json-util.service';
import { JsonSchemaService } from './json-schema.service';
import { PathUtilService } from './path-util.service';
import { RecordFixerService } from './record-fixer.service';
import { SchemaFixerService } from './schema-fixer.service';
import { SchemaValidationService } from './schema-validation.service';
import { ShortcutActionService } from './shortcut-action.service';
import { ShortcutService } from './shortcut.service';
import { TabIndexService } from './tab-index.service';
import { WindowHrefService } from './window-href.service';
import { StateChangeStoreService } from './state-change-store.service';

export {
  AppGlobalsService,
  RemoteAutocompletionService,
  ComponentTypeService,
  DomUtilService,
  DynamicTemplateLoaderService,
  EmptyValueService,
  JsonStoreService,
  JsonUtilService,
  JsonSchemaService,
  PathUtilService,
  RecordFixerService,
  SchemaFixerService,
  SchemaValidationService,
  TabIndexService,
  ShortcutActionService,
  ShortcutService,
  StateChangeStoreService,
  WindowHrefService
};

export const SHARED_SERVICES = [
  AppGlobalsService,
  RemoteAutocompletionService,
  ComponentTypeService,
  DomUtilService,
  DynamicTemplateLoaderService,
  EmptyValueService,
  JsonStoreService,
  JsonUtilService,
  JsonSchemaService,
  PathUtilService,
  RecordFixerService,
  SchemaFixerService,
  SchemaValidationService,
  TabIndexService,
  ShortcutActionService,
  ShortcutService,
  StateChangeStoreService,
  WindowHrefService
];
