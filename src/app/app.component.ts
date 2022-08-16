import { Component } from '@angular/core';
import { faCartArrowDown, faClipboard, faClock, faCoffee, faEnvelopeOpen, faFileCode, faLocationDot, faMagnifyingGlass, faNewspaper, faPager, faPalette, faPallet, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fun Facts About Countries';
  showMenu = false;
  showDemos = false;
  showPages = false;
  faCartArrowDown = faCartArrowDown;
  faMagnifyingGlass = faMagnifyingGlass;
  faFileCode = faFileCode;
  faClock = faClock;
  faClipBoard = faClipboard;
  faNewsPaper = faNewspaper;
  faPallete = faPalette;
  faPager = faPager;
  faEnvelope = faEnvelopeOpen;
  faLocation = faLocationDot;
  faPhone = faPhone;
}
