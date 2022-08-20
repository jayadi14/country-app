import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages/pages.component';
import { BlogComponent } from './blog/blog.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pages', component: PagesComponent },
  { path: 'blog', component: BlogComponent },
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
