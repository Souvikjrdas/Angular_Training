import { Injectable } from '@angular/core';
import { debounceTime, Observable , of,delay} from 'rxjs';
import { Employee } from '../array';
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  private arr: Employee[] =[{
    id: 1,
    name : 'Rahul'
  },
  {
    id : 2,
    name : 'Roy'
  }
]

  constructor() { }

  getAll() :Observable<Employee[]>{

    return of(this.arr).pipe(delay(2000));

  }


}
