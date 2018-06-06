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
 public myrepo:Repo=new Repo ('','','',new Date())
 public newRepo:any
 public myResults:any
// public name:[]
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
           this.myprofile.public_repos=results["public_repos"]
           console.log(this.profile)
           resolve()
       },
       error => {
           console.log(error)
           this.myprofile.avatar=''
           // this.myprofile.followers=0
           // this.myprofile.following=0
           this.myprofile.html_url="#"
           this.myprofile.login="Unknown"
           this.myprofile.location="Area 51"
           this.myprofile.public_repos=0
           reject()
       }
     )

   })
     return myPromise;
     }


findRepo(username){
interface ApiResponse{
  name:string;
  html_url:string;
  description:string;
  created_at:Date;
}
let myPromise = new Promise((resolve,reject)=>{
  this.httpClient.get<ApiResponse>("https://api.github.com/users/"+username+"/repos?order=created&sort=asc?access_token="+this.token).toPromise().then(getRepoResponse=>{
    this.newRepo = getRepoResponse;
    resolve();
  },error=>{
    reject(error);
  })
})
return myPromise;
}

}
