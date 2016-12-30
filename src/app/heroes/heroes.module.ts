import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { FormsModule } from "@angular/forms";
import {HeroRoutingModule} from "./heroes-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroRoutingModule
  ],
  declarations: [HeroListComponent, HeroDetailComponent],
  providers: [

  ]
})
export class HeroesModule { }
