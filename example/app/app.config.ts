import { OpaqueToken } from '@angular/core';

export let APP_CONFIG = new OpaqueToken('app.config');

export const EXAMPLE_CONFIG: AppConfig = {
  schemaOptions: {
    'titles.items.properties.title': {
      x_editor_hidden: true
    }
  }
};
