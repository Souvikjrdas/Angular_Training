import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ChildComponent } from '../child/child/child.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<ChildComponent> {
  canDeactivate(
    component: ChildComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      console.log(nextState?.url)
    return component.canDeactivate();
  }

}
