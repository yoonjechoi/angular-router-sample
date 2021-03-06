import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild, NavigationExtras} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService,
              private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    // console.log('AuthGuard#canActivate called.');
    // return true;

    let url: string = state.url;
    return this.checkLogin(url);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    return this.canActivate(childRoute, state);
  }

  checkLogin(url: string): boolean {
    if(this.authService.isLoggedIn) {
      return true;
    }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Create a dummy session id
    let sessionId = 123456789;

    let navigationExtras: NavigationExtras = {
      queryParams: {
        'session_id': sessionId,
      },
      fragment: 'anchor'

    }


    this.router.navigate(['/login'], navigationExtras);

    return false;
  }



}
