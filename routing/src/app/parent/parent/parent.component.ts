import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute  } from '@angular/router';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private route : Router , private _activatedService : ActivatedRoute) { }
  condition : boolean = true
  name:string | null = ""
  title:string | null = ""
  ngOnInit(): void {
    this.name = this._activatedService.snapshot.queryParamMap.get('Name')
    this.title =  this._activatedService.snapshot.queryParamMap.get('Title')
  }

}
