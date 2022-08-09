import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentRoutingModule } from './parent-routing.module';
import { ParentComponent } from './parent/parent.component';
import { MyParentComponent } from './parent/my-parent/my-parent.component';
import { MyParent2Component } from './parent/my-parent2/my-parent2.component';


@NgModule({
  declarations: [
    ParentComponent,
    MyParentComponent,
    MyParent2Component
  ],
  imports: [
    CommonModule,
    ParentRoutingModule
  ]
})
export class ParentModule { }
