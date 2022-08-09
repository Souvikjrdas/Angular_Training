import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http'
import {Observable,pipe,catchError,filter,map,tap, Observer , throwError, from, of} from 'rxjs';
import { isNumber } from '@ng-bootstrap/ng-bootstrap/util/util';


export class ErrorTracker{
  errorStatus : any;
  errorMessage : any;
}
@Component({
  selector: 'app-my-observable',
  templateUrl: './my-observable.component.html',
  styleUrls: ['./my-observable.component.css']
})
export class MyObservableComponent implements OnInit , OnDestroy {

  link : string = '';
  num : number[] = [1,2,3,4]
  err : ErrorTracker = new ErrorTracker()
  constructor(private route : ActivatedRoute , private router : Router ) { }

  ngOnInit(): void {

    // let obs = Observable.create((obser: { next: (arg0: number) => void; }) =>{
    //   for(let item of this.num){
    //     obser.next(item)
    //     if(item > 2){
    //       obser.error('')
    //     }
    //   }
    //   obs.complete();
    // })

    let obs  = new Observable<number>((obser) =>{
        for(let item of this.num){
        obser.next(item)
        if(item > 2){
          obser.error('An error occured')
        }
      }
      obser.complete();
    }).pipe(tap(data =>{
      console.log('Tap operator :'+data)
    }),catchError(this.errorHandler))


    obs.subscribe(
      // (next) =>{
      //   console.log(data)
      // },
      // error =>{
      //   console.log(error)
      // },
      // () =>{
      //   console.log("Completed!")
      // }
      next=>{

      }
    )

      this.myObservable().pipe(map((data:number) => {
        return data * 2
      }),filter((data : number)=>{
        return  data % 2 !== 0
      })).subscribe(
        (data : number)=>{
          console.log(data)
        }
      )



  }

  errorHandler(error : HttpErrorResponse) : Observable<number>{

    console.log(error)
    this.err.errorStatus = "Error"
    return throwError(7)
  }

  ngOnDestroy(): void {
    console.log("My-Observable Destroyed!")
  }

  myObservable() : Observable<number>{
    return from(this.num).pipe(tap(data=> console.log(data)),catchError(this.errorHandler))
  }


}
function data(data: any, arg1: any): import("rxjs").OperatorFunction<number[], unknown> {
  throw new Error('Function not implemented.');
}

