import {Routes, RouterModule} from "@angular/router";
import {CrisisCenterComponent} from "./crisis-center.component";
import {NgModule} from "@angular/core";
import {CrisisListComponent} from "./crisis-list/crisis-list.component";
import {CrisisCenterHomeComponent} from "./crisis-center-home/crisis-center-home.component";
import {CanDeactivateGuard} from "../auth/can-deactivate-guard.service";
import {CrisisDetailComponent} from "./crisis-detail/crisis-detail.component";
import {CrisisDetailResolver} from "./crisis-detail-resolver";
/**
 * Created by yoonjechoi on 2017. 1. 3..
 */

const crisisCenterRoutes: Routes = [
  {
    path: 'crisis-center',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: CrisisListComponent,
        children: [
          {
            path: ':id',
            component: CrisisDetailComponent,
            canDeactivate: [CanDeactivateGuard],
            resolve: {
              crisis:CrisisDetailResolver
            }
          },
          {
            path: '',
            component: CrisisCenterHomeComponent
          }

        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(crisisCenterRoutes)
  ],

  exports: [
    RouterModule
  ],
  providers: [
    CrisisDetailResolver
  ]
})
export class CrisisCenterRoutingModule {

}
