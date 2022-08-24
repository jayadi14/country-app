import { NgModule } from '@angular/core';
import { faClipboard, faClock, faFileCode, faNewspaper, faPager, faPalette } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ViewsRoutingModule } from './views-routing.module';
import { CommonModule } from '@angular/common'
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages/pages.component';
import { BlogComponent } from './blog/blog.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { ViewsComponent } from './views.component';
import { PagesDetailComponent } from './pages/pages-detail/pages-detail.component';
import {HttpClientModule} from '@angular/common/http';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component'



@NgModule({
  declarations: [
    ViewsComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    PagesComponent,
    BlogComponent,
    ShopComponent,
    ContactComponent,
    PagesDetailComponent,
    BlogDetailComponent,
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ]
})
export class ViewsModule {
  faFileCode = faFileCode;
  faClock = faClock;
  faClipBoard = faClipboard;
  faNewsPaper = faNewspaper;
  faPallete = faPalette;
  faPager = faPager;

}
