import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../Services/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service : AuthServiceService) { }

  ngOnInit(): void {
  }

  LogIn(){
    this.service.LoggedIn = true;
  }

  LogOut(){
    this.service.LoggedIn = false;
  }

}
