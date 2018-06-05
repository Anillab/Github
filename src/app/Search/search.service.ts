import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from "../user"
import {Repo} from "../repo"

@Injectable({
  providedIn: 'root'
})
export class SearchService{

  public token: string = environment.token;
  private username: string;
  public profile:any
  public myprofile:User=new User('',0,'','','','','','')
  public myrepo:Repo=new Repo ('','',new Date())
  public findrepositories:any
  public myResults:any
constructor (private httpClient:HttpClient) {

}
userFind(uname){
    this.username = uname;
    let myPromise = new Promise((resolve,reject) => {
      this.httpClient.get('https://api.github.com/users/' + this.username + "?access_token=" + this.token ).toPromise().then(
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
findRepo(username){
  let promise = new Promise((resolve,reject)=>{
    this.httpClient.get('https://api.github.com/repositories?q=' + this.username +"&per_page=&sort=forks&order=asc?access_token=" + this.token ).toPromise().then(
      reporesults=>{
        this.findrepositories=reporesults;
        this.myResults.description=reporesults["description"]
        resolve();
      },
      error=>{
        this.findrepositories="error"
        reject(error);
      }
    )

  }

  )
  return promise;
}



    }
      // userUpdate(username:string){
      //   this.username=username;
      // }
