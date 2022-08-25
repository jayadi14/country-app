import { Component, OnInit } from '@angular/core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  faEnvelope = faEnvelope;
  faKey = faKey;

  constructor() { }

  ngOnInit(): void {
  }

}
