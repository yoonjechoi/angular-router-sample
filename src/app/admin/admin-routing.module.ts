import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {AdminComponent} from "./admin.component";
import {ManageCrisesComponent} from "./manage-crises/manage-crises.component";
import {ManageHeroesComponent} from "./manage-heroes/manage-heroes.component";
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {AuthGuard} from "../auth/auth-guard.service";
/**
 * Created by yoonjechoi on 2017. 1. 9..
 */

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'crises', component: ManageCrisesComponent },
          { path: 'heroes', component: ManageHeroesComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]

  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],

  exports: [
    RouterModule
  ]

})
export class AdminRoutingModule {

}
