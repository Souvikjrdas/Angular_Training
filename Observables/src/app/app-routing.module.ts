import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyObservableComponent } from './my-observable/my-observable.component';

const routes: Routes = [
  {
    path:'',component:MyObservableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
