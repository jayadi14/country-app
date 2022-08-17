import { Component, OnInit } from '@angular/core';
import { faCartArrowDown, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


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

  constructor(private router: Router){}

  public buttonClick(fragment: string): void {
    this.router.navigateByUrl('#' + fragment);
  }


  ngOnInit(): void {
  }

}
