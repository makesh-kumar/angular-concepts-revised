import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[highlightText]',
})
export class TextHighlightDirective {
  @Input() color: string = '';
  constructor(public _eleRef: ElementRef) {}

  @HostListener('mouseover') addColor() {
    this._eleRef.nativeElement.style.color = this.color;
  }
  @HostListener('mouseleave') removeColor() {
    this._eleRef.nativeElement.style.color = 'black';
  }
}
