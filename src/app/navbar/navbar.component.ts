import { Component, ElementRef, OnInit } from '@angular/core';
import { faCartArrowDown, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showMenu = false;
  showDemos = false;
  showPages = false;
  faCartArrowDown = faCartArrowDown;
  faMagnifyingGlass = faMagnifyingGlass;

  toDemos(){
    document.getElementById("demos")?.scrollIntoView({behavior:"smooth"});
  }
  toAbout(){
    document.getElementById("about")?.scrollIntoView({behavior:"smooth"});
  }
  toFeatures(){
    document.getElementById("features")?.scrollIntoView({behavior:"smooth"});
  }
  toPortfolio(){
    document.getElementById("portfolio")?.scrollIntoView({behavior:"smooth"});
  }
  toShop(){
    document.getElementById("shop")?.scrollIntoView({behavior:"smooth"});
  }
  toContact(){
    document.getElementById("contact")?.scrollIntoView({behavior:"smooth"});
  }


  ngOnInit(): void {
  }

}
