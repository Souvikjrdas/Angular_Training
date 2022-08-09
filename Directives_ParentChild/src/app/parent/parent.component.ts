import { Component, OnInit , Input, OnChanges, SimpleChanges, DoCheck, OnDestroy, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Output ,EventEmitter, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit , OnChanges , DoCheck ,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {

  user: any

  @Input() hero : number = 0;

  @Output() heroChange  = new EventEmitter();
  // @Input() arrList : any[]  = []
  constructor() {
    console.log("Parent Constructor is called")
  }

  ngOnChanges(changes: SimpleChanges): void {

    console.log("ngOnchanges called in child-p")
    const {hero} = changes
    // for(let item in changes){
    //    this.user = changes[item]

    // }
    console.log("prev-value: "+hero.previousValue +" ,current-value: "+hero.currentValue)
  }

  ngOnInit(): void {
    console.log("Parent init is called")
  }

  ngDoCheck(){
    console.log("Parent DoCheck is called!")
  }

  ngAfterContentInit(): void {
    console.log('Parent ngAfterContentInit is called');
  }
  ngAfterContentChecked(): void {
    console.log('Parent ngAfterContentChecked is called');
  }
  ngAfterViewInit(): void {
    console.log('Parent ngAfterViewinit is called');
  }
  ngAfterViewChecked(): void {
    console.log('Parent ngAfterViewChecked is called');
  }

  ngOnDestroy(): void {
    console.log("Parent destroyed!")
  }

  updateparent(value:string){
    this.hero = Number(value)
    this.heroChange.emit(this.hero)
  }

}
