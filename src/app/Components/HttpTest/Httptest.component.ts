import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

interface Idata {
  id?: number;
  title?: string;
  userId?: number;
  completed?: boolean;
}

@Component({
  selector: 'app-httptest',
  templateUrl: './httptest.component.html',
})
export class HttpTestComponent {
  constructor(private _http: HttpClient) {}

  public data: Idata[] = [];
  fetchData(): void {
    const $obs = this._http
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .toPromise();
    const unsubs = $obs
      .then(
        (resp: any) => {
          this.data.push(resp);
        },
        () => {
          console.log('Inner catch');
        }
      )
      .catch(() => {
        console.log('Outer catch');
      });
  }
}
