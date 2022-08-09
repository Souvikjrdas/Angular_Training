import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './Guards/auth-guard.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '' , component:HomeComponent
  },
  {
    path:'parent',
    canActivate: [AuthGuardGuard],
    loadChildren: () =>
    import('./parent/parent.module').then(n=> n.ParentModule)
  },
  {
    path: 'login' , component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
