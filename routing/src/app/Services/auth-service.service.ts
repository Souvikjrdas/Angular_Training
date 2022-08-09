import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }
  private loggedIn : boolean = false
  url! : string

  get LoggedIn(){
    return this.loggedIn
  }

  set LoggedIn(value:boolean){
    this.loggedIn = value
  }



}
