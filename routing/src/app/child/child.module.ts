import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildRoutingModule } from './child-routing.module';
import { ChildComponent } from './child/child.component';
import { MyChildComponent } from './child/my-child/my-child.component';
import { MyChild2Component } from './child/my-child2/my-child2.component';


@NgModule({
  declarations: [
    ChildComponent,
    MyChildComponent,
    MyChild2Component
  ],
  imports: [
    CommonModule,
    ChildRoutingModule
  ]
})
export class ChildModule { }
