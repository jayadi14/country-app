import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { SigninComponent } from './signin/signin.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    SigninComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FontAwesomeModule,
  ]
})
export class LoginModule { }
