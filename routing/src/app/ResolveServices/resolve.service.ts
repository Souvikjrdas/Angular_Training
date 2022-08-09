import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../array';
import { MyServiceService } from '../Services/my-service.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveService implements Resolve<Employee[]>{

  constructor(private service : MyServiceService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee[]> {
    console.log(state);
    return this.service.getAll();
  }
}
