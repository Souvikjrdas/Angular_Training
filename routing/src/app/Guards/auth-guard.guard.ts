import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../Services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private auth:AuthServiceService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkifLoggedIn(state.url);
  }

  checkifLoggedIn(url:string){
    if(this.auth.LoggedIn){
      return true
    }
    else{
      this.auth.url = url;              //after login redirect user to the page where he/she was trying to access after checking the url is null or not
      this.router.navigateByUrl('/login');
      return false;
    }

  }

}
