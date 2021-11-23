import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
})
export class HomePageComponent {
  public myName: string = 'Makesh Kumar';
  public myAge: number = 24;
  public emittedData: string = '';

  public listData: string[] = ['apple', 'banana', 'cat'];
  callHomePageEvent(emittedData: string): void {
    this.emittedData = emittedData;
  }
}
