import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from "../user"
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class SearchService{

  public token: string = environment.token;
  private username: string;
  public profile:any
  public myprofile:User=new User('','','','','')
constructor (private httpClient:HttpClient) {

}
userFind(uname){
    this.username = uname;
    let myPromise = new Promise((resolve,reject) => {
      this.httpClient.get('https://api.github.com/users/' + this.username + "?api_token=" + this.token ).toPromise().then(
        results =>{
            this.profile=results;
            this.myprofile.avatar=results["avatar_url"]
            this.myprofile.followers=results["followers"]
            this.myprofile.following=results["following"]
            this.myprofile.html_url=results["html_url"]
            this.myprofile.login=results["login"]
            this.myprofile.location=results["location"]
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
