import { Injectable } from '@angular/core';
import { SearchService } from '../Search/search.service'
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  heyMe(msg:string){
    alert(msg)
  }
  constructor() { }
}
