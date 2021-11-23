import { Component } from '@angular/core';
@Component({
  selector: 'app-directivetest',
  templateUrl: './DirectiveTest.component.html',
})
export class DirectiveTestComponent {
  public isShow: boolean = false;
  toggleIsShow() {
    this.isShow = !this.isShow;
  }
}
