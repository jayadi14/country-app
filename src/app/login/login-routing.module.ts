import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent,
    children:[
      {
        path:'',
        component: SigninComponent,
      },

    ]
  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
