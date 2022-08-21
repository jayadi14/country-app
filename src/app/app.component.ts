import { Component } from '@angular/core';
import { faClipboard, faClock, faFileCode, faNewspaper, faPager, faPalette } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fun Facts About Countries';
  faFileCode = faFileCode;
  faClock = faClock;
  faClipBoard = faClipboard;
  faNewsPaper = faNewspaper;
  faPallete = faPalette;
  faPager = faPager;
}
