import { Component, OnInit } from '@angular/core';
import { SearchService } from '../Search/search.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[SearchService]
})
export class SearchComponent implements OnInit {
  // name:string='';
  profile:any[];
  username:string;



constructor (private searchService:SearchService) {}

userFind(){
  // this.SearchService.userUpdate(this.username);
  this.searchService.userFind(this.username)
    this.profile =   this.searchService.profile
  };


ngOnInit(){

}
}
