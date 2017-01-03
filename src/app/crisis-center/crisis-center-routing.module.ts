import {Routes, RouterModule} from "@angular/router";
import {CrisisCenterComponent} from "./crisis-center.component";
import {NgModule} from "@angular/core";
import {CrisisListComponent} from "./crisis-list/crisis-list.component";
import {CrisisDetailComponent} from "./crisis-detail/crisis-detail.component";
import {CrisisCenterHomeComponent} from "./crisis-center-home/crisis-center-home.component";
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
            component: CrisisDetailComponent
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
  ]
})
export class CrisisCenterRoutingModule {

}