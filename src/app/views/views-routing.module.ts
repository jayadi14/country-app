import { Component, NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages/pages.component';
import { BlogComponent } from './blog/blog.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { ViewsComponent } from './views.component';
import { PagesDetailComponent } from './pages/pages-detail/pages-detail.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component'
import { BlogUpdateComponent } from './blog/blog-update/blog-update.component'


const routes: Routes = [
  {
    path: '',
    component: ViewsComponent,
    children:[
          {
            path:'',
            component: HomeComponent,
            children:[
              {
                path:'home',
                component: HomeComponent
              },
            ]
          },


      { path: 'about', component: AboutComponent },
      { path: 'pages', component: PagesComponent},
      { path: 'pagesDetail/:id', component: PagesDetailComponent},
      { path: 'blog', component: BlogComponent },
      { path: 'blogDetail/:id', component: BlogDetailComponent},
      { path: 'blogUpdate/:id', component: BlogUpdateComponent},
      { path: 'shop', component: ShopComponent },
      { path: 'contact', component: ContactComponent },
    ]
  },

  ];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration : 'enabled',
  anchorScrolling: 'enabled',
};

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
