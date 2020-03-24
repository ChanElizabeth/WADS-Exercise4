import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';



@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private af: AngularFireAuth, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      // #1
      return this.af.authState.pipe(
        // #3
        map((user: any) => user !== null) // <--- [1]
      );
  
    }
  
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      return this.canActivate(route, state);
    }
 
}