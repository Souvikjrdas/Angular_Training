import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { popper } from '@popperjs/core';
import { DeactivateGuard } from '../Guards/deactivate.guard';
import { ResolveService } from '../ResolveServices/resolve.service';
import { ChildComponent } from './child/child.component';
import { MyChildComponent } from './child/my-child/my-child.component';
import { MyChild2Component } from './child/my-child2/my-child2.component';

const routes: Routes = [
  {
    path: 'child' , component:ChildComponent ,
    canDeactivate : [DeactivateGuard],
    resolve : {employee : ResolveService},
    outlet : 'pop',
    children:[
      {
        path:'mychild' , component:MyChildComponent,
        outlet : 'pop'
      },
      {
        path:'mychild2', component:MyChild2Component,
        outlet : 'pop'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildRoutingModule { }
