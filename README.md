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
<json-editor [schema]="mySchema" [record]="myRecord" (onRecordChange)="doStuffWithNewRecord($event)"></json-editor>
```

## Example

Please have a look at [example app](./example/app)

## Configuration

### Extended Schema

#### x_editor_autocompletion

Configuration for autocompletion of a field from remote source. Field to be autocompleted must have the `x_editor_autocompletion` property
with configuration object that has the following properties below.

```
{
  url: string; (remote source url that returns the autocompletion results)
  path: string; (path to array of autocompletion results in response from the url, seprated by dot '.')
  size: number; (maximum number of items to be showed)
}
```

Note that:

- query string is appended to `url`, so it should end like `.../foo?bar=`
- autocompletion results array which is located in `path`, must be a array of objects which have `text` property inside.

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

#### x_editor_validation_url

Url to be used for backend validation.

```
string
```

Note that:
  it should return errors in the same format as [remote-validation-response.json](./example/mock-data/remote-validation-response.json) 

#### x_editor_previews

Configuration for previews to be displayed in previewer (on the right side, below menu).

```
[
  {
    name: string; (name of the tab which preview is displayed)
    type: string; (type of the preview, such as "pdf")
    url_path: string; (dot separated path to url in the record)
  }
]
```

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
