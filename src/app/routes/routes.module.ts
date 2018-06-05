import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RoutingModule,Routes } from "@angular/router";
import {SearchComponent} from "../search/search.component";

const routes:Routes=[
  {path:"users",component:SearchComponent}
]
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class RoutesModule { }
