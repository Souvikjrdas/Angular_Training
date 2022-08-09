import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { User1RoutingModule } from './user1-routing.module';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    User1RoutingModule
  ],
  exports: [
    FormsModule
  ],
})
export class User1Module { }
