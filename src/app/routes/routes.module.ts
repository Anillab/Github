import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import {HttpClient} from '@angular/common/http'
import { SearchComponent } from '../search/search.component';

const routes:Routes=[
  {path:"users",component:SearchComponent},
  {path:"",redirectTo:"/users",pathMatch:"full"},
]

@NgModule({
  imports: [
    CommonModule,
  ],
  exports:[RouterModule],
  declarations: []
})
export class RoutingModule { }
