/**
 * Created by yoonjechoi on 2016. 12. 30..
 */


import {NgModule} from "@angular/core";
import {CrisisListComponent} from "./crisis-list/crisis-list.component";
import {Routes, RouterModule} from "@angular/router";
import {HeroListComponent} from "./hero-list/hero-list.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'heroes', component: HeroListComponent },
  { path: '', redirectTo: '/heroes', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],

})
export class AppRoutingModule {

}
