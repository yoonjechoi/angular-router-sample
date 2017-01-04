import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
// import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import {CrisisCenterRoutingModule} from "./crisis-center-routing.module";
import {CrisisService} from "./crisis.service";

@NgModule({
  imports: [
    CommonModule,
    CrisisCenterRoutingModule
  ],
  declarations: [
    CrisisCenterComponent,
    CrisisCenterHomeComponent,
    CrisisListComponent,
    // CrisisDetailComponent
  ],
  providers: [
    CrisisService
  ]
})
export class CrisisCenterModule { }
