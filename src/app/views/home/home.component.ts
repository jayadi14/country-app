import { Component, OnInit } from '@angular/core';
import { faFileCode, faClock, faClipboard, faNewspaper, faPalette, faPager } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faFileCode = faFileCode;
  faClock = faClock;
  faClipBoard = faClipboard;
  faNewsPaper = faNewspaper;
  faPallete = faPalette;
  faPager = faPager;
  constructor() {
  }

  ngOnInit(): void {
  }

}
