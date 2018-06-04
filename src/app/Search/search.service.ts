import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class SearchService{

  public token: string = environment.token;
  private username: string;
  public profile:any


constructor (private httpClient:HttpClient) {

}
userFind(uname){
    this.username = uname;
    let myPromise = new Promise((resolve,reject) => {
      this.httpClient.get('https://api.github.com/users/' + this.username + "?api_token=" + this.token ).toPromise().then(
        results =>{
            this.profile=results;
            console.log(this.profile)
            resolve()
        },
        error => {
            console.log(error)
            reject()
        }
      )

    })
      return myPromise;
      }
    }
      // userUpdate(username:string){
      //   this.username=username;
      // }
