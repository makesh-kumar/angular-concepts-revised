import { Component } from '@angular/core';

@Component({
  selector: 'app-pipetest',
  templateUrl: './pipe-test.component.html',
})
export class PipeTestComponent {
  public arr = ['apple', 'banana', 'cat'];

  addData() {
    this.arr.push('dog');
    this.arr.push('elephant');
  }

  canExit() {
    return confirm('Are you sure?');
  }
}
