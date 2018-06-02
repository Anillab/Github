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

  constructor( private searchService:SearchService)
 {
   this.searchService=SearchService;
 }

  ngOnInit() {

  }

}
