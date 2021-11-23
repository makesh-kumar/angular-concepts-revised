import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MyHttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('INTERCEPTO');
    let headers = new HttpHeaders({ AAAAAAAAAAAAAAAAAA: 'aa' });
    headers.append('Content-Type', 'application/json');
    headers = headers.set('CCCCCCCCCCCCCC', 'xxxxxxcc');

    req = req.clone({ headers });
    return next.handle(req);
  }
}
