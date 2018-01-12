import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate {

  constructor(private _router:Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    debugger;
    let id = + route.url[1].path;
    if (isNaN(id) || id < 1) {
      console.log('error');
      this._router.navigate(['./products']);
      return false;
    }
    return true;
  }

}
