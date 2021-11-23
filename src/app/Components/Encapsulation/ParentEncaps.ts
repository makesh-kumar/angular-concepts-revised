import { style } from '@angular/animations';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-parent-encaps',
  template: `<h3>Parent Encapsulation</h3>
    <app-child-encaps></app-child-encaps>`,

  encapsulation: ViewEncapsulation.Emulated,

  styles: [' h3 { color: red }'],
})
export class ParentEncaps {}
