# ng2-json-editor

Angular2 component for editing large json documents.

# USAGE

## Quick start

### Install

```bash
npm install --save ng2-json-editor
```

### Import

```typescript
import { JsonEditorModule } from 'ng2-json-editor/ng2-json-editor';
```

Then add it to your module's `imports`.

### Use

```html
<json-editor [config]="config" [schema]="mySchema" [record]="myRecord" (onRecordChange)="doStuffWithNewRecord($event)"></json-editor>
```

- `config` : configuration object. See [configuration section](#configuration) for options.
- `schema` : valid json-schema for the record. See [json schema limitations](#json-schema-limitations)
- `record` : valid json to be edited.
- `onRecordChange` emitted when record change, `$event` is the edited record.
- `errorMap (={})`: errors for individual parts of the record (format should be [errors-map.json](./example/assets/mock-data/error-map.json) 

## Example

Please have a look at [example app](./example/app)

## <a name="configuration"></a>Configuration

|               |             |             |
| ------------- |-------------|-------------|
| *schemaOptions*      | Object | Enriches JsonSchema with custom properties that `ng2-json-editor` understands. See [possible values](#schemaOptions).|
| *previews*      | Array | Configures previews for the document. See [configuration syntax](#previews).|

### <a name="schemaOptions"></a>Extended Schema (schemaOptions)

The keys of this object correspond the path in the schema that wants to be configured (in dotted notation), for example:

```
{
  'titles.items.properties.title': {
    x_editor_hidden: true
  },
  'abstracts': {
    x_editor_disabled: true
  }
}
```

Continue reading for available configuration available for fields.

#### x_editor_autocomplete

Configuration for autocompletion of a field from remote or local source. Field to be autocompleted must have the `x_editor_autocomplete` property
with configuration object that has the following properties below.

```
{
  url?: string; (remote source url that returns the autocompletion results)
  path?: string; (path to array of autocompletion results in response from the url, separated by dot '.')
  source?: Array<string>; (source array that will be used to autocomplete locally)
  size: number; (maximum number of items to be showed)
}
```

Note that:

- query string is appended to `url`, so it should end like `.../foo?bar=`.
- autocompletion results array which is located in `path`, must be a array of objects which have `text` property inside.
- **either `url` and `path` or `source` must be set.**

#### x_editor_hidden

Flag to hide fields in the record from the editor's UI.

```
boolean
```

Note that:

- It deletes fields that are set `x_editor_hidden: true` from the record, before rendering the UI.

#### x_editor_disabled

Flag to disable fields that should be displayed in the UI, but aren't supposed to be edited.

```
boolean
```

Note that:

- It overrides all other types. For instance, if a field enum and `x_editor_disabled` is set, then it is rendered as simple `div` instead of disabled `enum` component (dropdown).

#### x_editor_always_show

Flag to show fields on the UI, even if they aren't present in the record.

```
boolean
```

#### x_editor_priority

Indicator to be used for sorting all fields on the UI.
Larger priority fields appears up-most/left-most on the UI.

```
number
```

```
default: 0
```

#### x_editor_enum_shortcut_map

Shortcut map for enum fields, to map shorthand values to enum values

```
{
  a: "An value in enum array",
  abc: "Another value in enum array"
}
```

So when `a` typed in enum field and enter is pressed, enum field value will be set to `Another value in enum array`.

#### <a name="x_editor_ref_config"></a>x_editor_ref_config

Config for objects that has `$ref` string as a property which points to another json.

```
{
  template: string; (html template where you can access json that is pointed by $ref by using 'context')
  lazy: boolean; (flag to indicate if template should be rendered on request or on page load, a preview button is inserted if set true)
}
```

Example template:
```
<div>aValue: {{(context | async)?.aValue}}<div>
```

Note that:

- you have to use async pipe since the Observable passed as context.
- you can use other angular2 common pipes such as `lowercase`, `json` etc.

### <a name="previews"></a>Previews

Configuration for previews to be displayed in previewer (on the right side).

```
[
  {
    name: string; (name of the tab which preview is displayed)
    type: string; (type of the preview, such as "pdf")
    url_path: string; (dot separated path to url in the record)
  }
]
```

### $ref fields

These are object fields which has `$ref` string value that points to another json (remote or local).

If you don't configure [like here](#x_editor_ref_config) it will be displayed as a clickable, not editable `$ref` link that opens to the link in a new tab.

## <a name="json-schema-limitations"></a>Json Schema Limitations

### anyOf

`ng2-json-editor` has very limited support for `anyOf`, support where all `anyOf` items have same properties
and they are objects with primitive properties. Before display, it picks the first `anyOf` item, merges all enum values and
removes `pattern` and `format` rules.

# DEVELOPMENT

## Quick start

**Make sure you have Node version >= 4.0 and NPM >= 3**

### Setup

```bash
# clone our repo or alternatively your fork
git clone https://github.com/inspirehep/ng2-json-editor.git

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

# test
gulp test
# or
ng test --watch=false

# test and watch (for usually debugging tests)
ng test

# build
gulp build 
```

## Contributing

Please see [CONTRIBUTING](./github/CONTRIBUTING.md)
