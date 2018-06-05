import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import {HttpClient} from '@angular/common/http'
import { SearchComponent } from '../search/search.component';
import { RoutingModule } from './routing/routing.module';
//import { NotFoundComponent } from '../not-found/not-found.component';


const routes:Routes=[
  {path:"users",component:SearchComponent},
  {path:"",redirectTo:"/users",pathMatch:"full"},
  //{path:'**',component:NotFoundComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports:[RouterModule],
  declarations: []
})
export class RoutingModule { }
