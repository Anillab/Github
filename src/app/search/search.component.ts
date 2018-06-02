import { Component, OnInit } from '@angular/core';
import { SearchService } from '../Search/search.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[SearchService]
})
export class SearchComponent implements OnInit {
  searchService:SearchService;
  let msg:string;


 //  constructor( searchService:SearchService)
 // {
 // }

//   ngOnInit() {
//     // this.msg=this.SearchService
//   }
//
// }
