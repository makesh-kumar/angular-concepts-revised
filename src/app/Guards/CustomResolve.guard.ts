import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CustomResolveGuard implements Resolve<any> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res('RESOLVED_DATA');
      }, 3000);
    });
  }
}
