/**
 * Created by yoonjechoi on 2016. 12. 30..
 */


import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ComposeMessageComponent} from "./compose-message/compose-message.component";
import {CanDeactivateGuard} from "./auth/can-deactivate-guard.service";

const appRoutes: Routes = [
  // { path: 'crisis-center', component: CrisisListComponent },
  // { path: 'heroes', component: HeroListComponent },
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**',
    component: PageNotFoundComponent
  },
  { path: 'compose',
    component: ComposeMessageComponent,
    outlet:'popup'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard
  ]

})
export class AppRoutingModule {

}
