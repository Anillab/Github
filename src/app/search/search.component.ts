import { Component, OnInit } from '@angular/core';
import { SearchService } from '../Search/search.service'
import { HttpClient } from '@angular/common/http';
import {User} from "../user";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[SearchService]
})
export class SearchComponent implements OnInit {
  // name:string='';
  myprofile:User;
  profile:any[];
  username:string;
constructor (private searchService:SearchService) {}

userFind(){
  // this.SearchService.userUpdate(this.username);
  this.searchService.userFind(this.username).then(()=>{
    this.myprofile=this.searchService.myprofile
})
    this.profile =   this.searchService.profile

  };


ngOnInit(){

}
}
