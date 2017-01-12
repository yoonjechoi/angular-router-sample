import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {CrisisDetailComponent} from "../crisis-center/crisis-detail/crisis-detail.component";

 export interface CanComponentDeactivate {
   canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
 }

 @Injectable()
 export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate>{

   canDeactivate(component: CanComponentDeactivate,
                 route: ActivatedRouteSnapshot,
                 state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {

     return component.canDeactivate ? component.canDeactivate() : true;
   }

   constructor() { }

 }

//@Injectable()
//export class CanDeactivateGuard implements CanDeactivate<CrisisDetailComponent> {
//  canDeactivate(component: CrisisDetailComponent,
//                route: ActivatedRouteSnapshot,
//                state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
//
//    //Get the Crisis Center ID
//    console.log(route.params['id']);
//
//    //Get the currnet URL
//    console.log(state.url)
//
//    if(!component.crisis || component.crisis.name === component.editName) {
//      return true;
//    }
//    return component.dialogService.confirm('Discard changes?')
//  }
//
//}
