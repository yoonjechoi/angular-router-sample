import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Crisis, CrisisService} from "./crisis.service";
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';

@Injectable()
export class CrisisDetailResolver implements  Resolve<Crisis>{

  constructor(private crisisService: CrisisService,
              private router: Router) {

  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
    let id = route.params['id'];

    return this.crisisService.getCrisis(id)
      .map((crisis: Crisis) => {
      if(crisis) {

        return crisis;

      } else {

        this.router.navigate(['/crisis-center']);
        return null;

      }
    });

  }

}
