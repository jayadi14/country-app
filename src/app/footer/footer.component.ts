import { Component, OnInit } from '@angular/core';
import { faCartArrowDown, faClipboard, faClock, faCoffee, faEnvelopeOpen, faFileCode, faLocationDot, faMagnifyingGlass, faNewspaper, faPager, faPalette, faPallet, faPhone } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faEnvelope = faEnvelopeOpen;
  faLocation = faLocationDot;
  faPhone = faPhone;

  ngOnInit(): void {
  }

}
