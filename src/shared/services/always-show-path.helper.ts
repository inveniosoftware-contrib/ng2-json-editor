export class AlwaysShowPathHelper {

  private paths: Array<Array<string>> = [];


  getAlwaysShowFieldPaths(schema: Object): Array<Array<string>> {
    this.find([], schema);
    return this.paths;
  }

  find(path: Array<string>, schema: Object) {
    if (schema['x_editor_always_show']) {
      if (path.length > 0) {
        this.paths.push(path);
      }
      return;
    }

    let innerSchema = schema['type'] === 'array' ?
      schema['items']['properties'] : schema['properties'];

    if (innerSchema) {
      Object.keys(innerSchema).forEach(prop => {
        let newPath = path.concat([prop]); // copy! TODO: is it necessary?
        this.find(newPath, innerSchema[prop]);
      });
    }
  }
}
