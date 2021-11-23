import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
@Directive({
  selector: '[isShow]',
})
// Structural directive
export class isShowDirective {
  @Input() isShow: boolean = false;

  constructor(
    private _tempRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef
  ) {}

  ngOnChanges() {
    if (this.isShow) {
      this._viewContainerRef.createEmbeddedView(this._tempRef);
    } else {
      this._viewContainerRef.clear();
    }
  }
}
