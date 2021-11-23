import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycle-child',
  template: `<h1>LifeCycle Child</h1>`,
})
export class LifeCycleChild {
  ngOnChanges() {
    console.log('child - ng on changes');
  }

  ngOnInit() {
    console.log('child - ng on init');
  }

  ngDoCheck() {
    console.log('child - ng do check');
  }

  ngAfterContentInit() {
    console.log('child - ng after content init');
  }

  ngAfterContentChecked() {
    console.log('child - ng after content checked');
  }

  ngAfterViewInit() {
    console.log('child - ng after view init');
  }

  ngAfterViewChecked() {
    console.log('child - ng after view checked');
  }

  ngOnDestroy() {
    console.log('child - on destroy');
  }
}
