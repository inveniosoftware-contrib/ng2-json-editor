[![Build Status](https://travis-ci.org/inveniosoftware-contrib/ng2-json-editor.svg?branch=master)](https://travis-ci.org/inveniosoftware-contrib/ng2-json-editor)
[![Coverage Status](https://coveralls.io/repos/github/inveniosoftware-contrib/ng2-json-editor/badge.svg?branch=master)](https://coveralls.io/github/inveniosoftware-contrib/ng2-json-editor?branch=master)
[![npm version](https://badge.fury.io/js/ng2-json-editor.svg)](https://badge.fury.io/js/ng2-json-editor)

# ng2-json-editor

Angular2 component for editing large json documents.

# USAGE

## Live Demo
Here is a live example of ng2-json-editor: [https://inveniosoftware-contrib.github.io/ng2-json-editor](https://inveniosoftware-contrib.github.io/ng2-json-editor)

## Quick start

### Install

```bash
npm install --save ng2-json-editor
```

#### Style Requirements

- [Bootstrap](http://getbootstrap.com/)
- [Font Awesone](http://fontawesome.io/)

Styles above must be available globally in your application, if you are using [Angular CLI](https://cli.angular.io/) you can have a look at example-app's [angular-cli.json](./angular-cli.json) to
see how to include those styles in your application. 

### Import

```typescript
import { JsonEditorModule } from 'ng2-json-editor';
```

Then add it to your module's `imports`.

### Use

```html
<json-editor [config]="config" [schema]="mySchema" [record]="myRecord" (onRecordChange)="doStuffWithNewRecord($event)"></json-editor>
```

- `config` : configuration object. See [configuration docs](https://inveniosoftware-contrib.github.io/ng2-json-editor/docs/interfaces/_json_editor_config_.jsoneditorconfig.html) for options.
- `schema` : valid json-schema for the record. See [json schema limitations](#json-schema-limitations)
- `record` : valid json to  be edited.
- `onRecordChange` emitted when record change, `$event` is the edited record.
- `errorMap (={})`: errors for individual parts of the record (format should be [errors-map.json](./example/assets/mock-data/error-map.json)
- `templates: { [templateName: string]: TemplateRef<any> }`: Templates with name, to be used by configured fields for example autocomplete result item.

## Example

Please have a look at [example app](./example/app)

## <a name="json-schema-limitations"></a>Json Schema Limitations

### anyOf

`ng2-json-editor` has very limited support for `anyOf`, support where all `anyOf` items have same properties
and they are objects with primitive properties. Before display, it picks the first `anyOf` item, merges all enum values and
removes `pattern` and `format` rules.

# DEVELOPMENT

## Quick start

**Make sure you have Node version >= 6.9 and NPM >= 3**

### Setup

```bash
# clone our repo or alternatively your fork
git clone https://github.com/inveniosoftware-contrib/ng2-json-editor.git

# change directory to our repo
cd ng2-json-editor

# install the repo with npm
npm install

# build for the first time and start example app to see changes
npm start

# in another terminal session
# watch changes on src, so that all will be available on example app immediately
gulp watch
```

### Useful commands

```bash
# build the editor and start the server with example app
npm start

# run unit tests
npm run test:unit

# run e2e tests (an instance should be running)
npm run test:e2e

# test and watch (for usually debugging tests)
ng test

# build
gulp build 
```

## Contributing

Please see [CONTRIBUTING](./github/CONTRIBUTING.md)
