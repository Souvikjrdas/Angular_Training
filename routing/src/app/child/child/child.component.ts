import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/array';
import { MyServiceService } from 'src/app/Services/my-service.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  arr !: Employee[]

  ngOnInit(): void {
    this.arr = this.route.snapshot.data['employee']
    console.log(this.arr)
  }

  canDeactivate():boolean{
    if(confirm('Are you sure lose changes? Press OK to Proced')){
      return true
    }
    else{
      return false
    }
  }

}
