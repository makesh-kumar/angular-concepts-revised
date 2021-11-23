import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-receiver',
  templateUrl: './Receiver.component.html',
})
export class ReceicverComponent {
  @Input() myName: string = '';
  @Output() callHomePageEvent = new EventEmitter<string>();
  public myAge: number = 0;

  @Input('myAge') set setMyAge(age: number) {
    this.myAge = age;
  }

  callHomePage() {
    this.callHomePageEvent.emit('emitted data');
  }
}
