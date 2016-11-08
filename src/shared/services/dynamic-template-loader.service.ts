import { Injectable, Compiler, ViewContainerRef, Component, NgModule, ComponentFactory } from '@angular/core';
import { CommonModule } from '@angular/common';

@Injectable()
export class DynamicTemplateLoaderService {

  // cache for component factories for templates
  private cache: Map<string, ComponentFactory<any>> = new Map();

  constructor(private compiler: Compiler) { }

  /**
   * Creates a dummy component with given template and context
   * and inserts it in given view container.
   * 
   * @param {string} template - html template string
   * @param {any} context - context data which is referenced in `template` as `context`
   * @param {ViewContainerRef} viewContainer - view container where the template will inserted
   */
  public loadTemplate(template: string, context: any, viewContainer: ViewContainerRef) {
    // check if factory for dummy component is created before for the template
    if (this.cache.has(template)) {
      let component = viewContainer.createComponent(this.cache.get(template));
      component.instance.context = context;
      return;
    }

    // dummy component with given template
    @Component({ template: template })
    class DynamicTemplateComponent { }

    // dummy module that wraps dummy component and CommonModule (for core pipes such as async)
    @NgModule({
      declarations: [DynamicTemplateComponent],
      imports: [CommonModule]
    })
    class DynamicTemplateModule { }

    // compile the module in runtime which will create the factory for dummy component
    this.compiler.compileModuleAndAllComponentsAsync(DynamicTemplateModule)
      .then(module => module.componentFactories
        .find(factory => factory.componentType === DynamicTemplateComponent))
      .then(factory => {
        this.cache.set(template, factory);
        let component = viewContainer.createComponent(factory);
        component.instance.context = context;
        component.changeDetectorRef.markForCheck();
      });
  }
}
