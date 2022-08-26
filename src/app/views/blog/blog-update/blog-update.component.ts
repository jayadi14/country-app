import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-update',
  templateUrl: './blog-update.component.html',
  styleUrls: ['./blog-update.component.css']
})
export class BlogUpdateComponent implements OnInit {

  constructor(private http: HttpClient, private route:ActivatedRoute) {
    this.blogId = this.route.snapshot.paramMap.get('id');
    this.getData();
   }

  alert:boolean=false;
  posts:any;
  blogId?: string | null;

  cobaForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  // updateForm(){
  //   this.cobaForm.patchValue({
  //     firstName: '',
  //     lastName: ''
  //   });
  // }

  getData(){
    const headers = new HttpHeaders({"app-id": "63044dfc6a97404475895aa4"});
    const requestOptions = { headers: headers };
    let url="https://dummyapi.io/data/v1/user/" + this.blogId;
    this.http.get(url,requestOptions).subscribe((posts : any) => {
      this.posts = posts;
      this.cobaForm = new FormGroup({
        firstName: new FormControl(posts.firstName),
        lastName: new FormControl(posts.lastName),
      });
    });
  }

  update(){
    const headers = new HttpHeaders({"app-id": "63044dfc6a97404475895aa4"});
    const requestOptions = { headers: headers };
    let url="https://dummyapi.io/data/v1/user/" + this.blogId;
    this.http.put(url,this.cobaForm.value,requestOptions).subscribe()
    this.alert=true
  }

  closeAlert(){
    this.alert=false
  }


  ngOnInit(): void {
  }

}
