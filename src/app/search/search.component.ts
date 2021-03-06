import { Component, OnInit } from '@angular/core';
import { SearchService } from '../Search/search.service'
import { HttpClient } from '@angular/common/http';
import {User} from "../user";
import {Repo} from "../repo"

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[SearchService]
})
export class SearchComponent implements OnInit {
  myprofile:User;
  profile:any[];
  username:string;
  reporesults:any;

constructor (private searchService:SearchService) {}

findRepo(){
  this.searchService.findRepo(this.username).then(()=>{
    this.reporesults=this.searchService.newRepo
  })

}

userFind(){
  this.searchService.userFind(this.username).then(()=>{
    this.myprofile=this.searchService.myprofile
    this.findRepo()
})
    this.profile =   this.searchService.profile

  };



ngOnInit(){

}
}
