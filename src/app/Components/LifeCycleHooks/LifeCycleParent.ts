import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycle-parent',
  template: `<h1>LifeCycle Parent</h1>
    {{ name }}
    <button (click)="changeName()">Change name</button>
    <app-lifecycle-child></app-lifecycle-child>`,
})
export class LifeCycleParent {
  public name: string = '';
  changeName() {
    this.name = this.name + 's';
  }
  ngOnChanges() {
    console.log('ng on changes');
  }

  ngOnInit() {
    console.log('ng on init');
  }

  ngDoCheck() {
    console.log('ng do check');
  }

  ngAfterContentInit() {
    console.log('ng after content init');
  }

  ngAfterContentChecked() {
    console.log('ng after content checked');
  }

  ngAfterViewInit() {
    console.log('ng after view init');
  }

  ngAfterViewChecked() {
    console.log('ng after view checked');
  }

  ngOnDestroy() {
    console.log('on destroy');
  }
}
