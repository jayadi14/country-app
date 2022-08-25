import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // posts: any;
  // regId?: string | null;

  constructor(private http: HttpClient) { }

  // form: FormGroup;
  // this.form = this.fb.group({
  //   firstName: [''],
  //   avatar: [null],
  // });

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  // onSubmit() {
  //   console.warn(this.profileForm.value);
  // }

  onSubmit(){
    const headers = new HttpHeaders({"app-id": "63044dfc6a97404475895aa4"});
    const requestOptions = { headers: headers };
    let url="https://dummyapi.io/data/v1/user/create";
    this.http.post(url,this.profileForm.value,requestOptions).subscribe()
  }

  ngOnInit(): void {
  }

}
