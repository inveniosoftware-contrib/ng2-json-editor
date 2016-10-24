import { AppGlobalsService } from './app-globals.service';
import { AutocompletionService } from './autocompletion.service';
import { ComponentTypeService } from './component-type.service';
import { DomUtilService } from './dom-util.service';
import { EmptyValueService } from './empty-value.service';
import { JsonUtilService } from './json-util.service';
import { RecordFixerService } from './record-fixer.service';
import { RecordChangeNotifierService } from './record-change-notifier.service';
import { SchemaFixerService } from './schema-fixer.service';
import { SchemaValidationService } from './schema-validation.service';
import { WindowHrefService } from './window-href.service';

export {
  AppGlobalsService,
  AutocompletionService,
  ComponentTypeService,
  DomUtilService,
  EmptyValueService,
  JsonUtilService,
  RecordFixerService,
  RecordChangeNotifierService,
  SchemaFixerService,
  SchemaValidationService,
  WindowHrefService
};

export const SHARED_SERVICES = [
  AppGlobalsService,
  AutocompletionService,
  ComponentTypeService,
  DomUtilService,
  EmptyValueService,
  JsonUtilService,
  RecordFixerService,
  RecordChangeNotifierService,
  SchemaFixerService,
  SchemaValidationService,
  WindowHrefService
];
