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
  name:string='';



constructor (private searchService:SearchService,private httpClient:HttpClient) {}
type(event:any){
  this.name=event.target.value;
}
getProfile(){

    this.httpClient.get('https://api.github.com/search/repositories?q=users&order=desc').subscribe(
      (data:any[])=>{
        console.log(data)
      }
    )



}

ngOnInit(){}
}
