import { Directive, ElementRef, Input, Output, EventEmitter, HostListener, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[contentModel]'
})
export class ContentModelDirective implements OnChanges {

  @Input() contentModel: string;

  @Output() contentModelChange = new EventEmitter<string>();

  constructor(private elementRef: ElementRef) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['contentModel']) {
      this.refresh();
    }
  }

  @HostListener('blur')
  onBlur() {
    this.emitContentModelChange();
  }

  @HostListener('keypress', ['$event'])
  onKeypress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.emitContentModelChange();
    }
  }

  private emitContentModelChange() {
    let value = this.elementRef.nativeElement.innerText;
    this.contentModelChange.emit(value);
  }

  private refresh() {
    this.elementRef.nativeElement.innerText = this.contentModel;
  }
}
