import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck,OnInit,OnChanges,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked
{
  constructor(){
    console.log("App constructor is called")
  }
  @ViewChild('para', {static: true}) para! : ElementRef ;

  title = 'rough';
  data: number = 0;
  ero:any = false;
  fun1:any = "value"
  show:boolean = false
  ele:number[] = [1,2,3,4]

  ngOnChanges(changes: SimpleChanges): void {
    console.log("onChange is called in App Component");
  }

  ngOnInit(){
    console.log("App init is called");
  }

  ngDoCheck(): void {
    console.log("DoCheck is called in app component");
  }

  ngAfterContentInit(): void {
    console.log("App-ngAfterContentInit is called");
  }

  ngAfterContentChecked(): void {
    console.log("App-ngAfterContentchecked is called");
  }

  ngAfterViewInit(): void {
    console.log("App-ngAfterViewInit is called");
    console.log(this.para.nativeElement)
  }

  ngAfterViewChecked(): void {
    console.log("App-ngAfterViewChecked is called");
  }



  function1(data:any){
    this.ero = data;
    console.warn(`${this.ero.name1}`+" " + `${this.ero.value}`)
  }

  change(){
    // for(let item in this.ele){
    //  console.log(this.ele[item])
    // }
  }

  changeInput(){
    // this.ero = "opa"
    this.show = !this.show
  }

  update(){
    this.ele = [1,7,8,9]
  }

}
