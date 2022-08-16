import { Component, OnInit } from '@angular/core';
import { faCartArrowDown, faClipboard, faClock, faCoffee, faEnvelopeOpen, faFileCode, faLocationDot, faMagnifyingGlass, faNewspaper, faPager, faPalette, faPallet, faPhone } from '@fortawesome/free-solid-svg-icons';


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


  ngOnInit(): void {
  }

}
