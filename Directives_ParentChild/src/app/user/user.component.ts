import { Component, OnInit,Input, Output , EventEmitter} from '@angular/core';
interface DTO {
  name:string,
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // @Output() xyz:EventEmitter<any> = new EventEmitter()
  @Input() xyz:any
  hero:DTO = {
    name :"koli"
  }
  ero = "abc"
  constructor() { }

  ngOnInit(): void {


    this.ero = this.xyz
    

  }

}
