import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,DoCheck{

  constructor() {
    console.log("Child constructed")
  }

  ngOnInit(): void {
    console.log("Child initialized")
  }

  ngDoCheck(): void {
    console.log("DoCheck is called in child component")
  }

  UpdateChild(){

  }

}
