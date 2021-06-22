import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { SignUpViewComponent } from './sign-up-view/sign-up-view.component';

const routes: Routes = [
  {
    path:"",
    "component":HomeComponent
  },
  {
    path:"login-view",
    "component":LoginViewComponent
  },
  {
    path:"sign-up-view",
    "component":SignUpViewComponent
  },
  {
    path:"edit-sign-up-view/:id",
    "component":SignUpViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
