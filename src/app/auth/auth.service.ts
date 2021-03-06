import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {

  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor() {

  }

  login(): Observable<boolean> {{}
    return Observable.of(true).delay(1000).do( val => this.isLoggedIn = true);
  }

  logout(): void {
    this.isLoggedIn = false;
  }

}
