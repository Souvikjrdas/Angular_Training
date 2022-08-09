import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from '../Guards/auth-guard.guard';
import { MyParentComponent } from './parent/my-parent/my-parent.component';
import { MyParent2Component } from './parent/my-parent2/my-parent2.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [

    // path: 'parent' , component:ParentComponent,
    // canActivate: [AuthGuardGuard],
      {
        path: '' , component:ParentComponent
      },
      {
        path:'myparent' , component:MyParentComponent

      },
      {
        path:'myparent2', component:MyParent2Component
      }


]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentRoutingModule { }
