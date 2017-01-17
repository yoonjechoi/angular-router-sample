/**
 * Created by yoonjechoi on 2016. 12. 30..
 */


import {NgModule} from "@angular/core";
import {Routes, RouterModule, PreloadAllModules} from "@angular/router";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ComposeMessageComponent} from "./compose-message/compose-message.component";
import {CanDeactivateGuard} from "./auth/can-deactivate-guard.service";
import {AuthGuard} from "./auth/auth-guard.service";
import {SelectivePreloadingStrategy} from "./selective-preloading-strategy";

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
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    canLoad: [AuthGuard]
  },
  //{
  //  path: 'crisis-center',
  //  loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule',
  //  data: { preload: false }
  //}


];

@NgModule({
  imports: [
    RouterModule.forRoot( appRoutes, { preloadingStrategy: SelectivePreloadingStrategy })
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard,
    SelectivePreloadingStrategy
  ]

})
export class AppRoutingModule {

}
