import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './login/signin/signin.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children:[
      {
        path:'',
        loadChildren: () => import('./views/views.module').then(m => m.ViewsModule)
      },
      {
        path:'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
      },
    ]
  },

  { path: 'register', component: RegisterComponent},
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration : 'enabled',
  anchorScrolling: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
