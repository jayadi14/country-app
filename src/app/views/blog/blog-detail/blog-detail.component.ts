import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  posts: any;
  blogId?: string | null;

  constructor(private http: HttpClient, private route:ActivatedRoute) {
    this.blogId = this.route.snapshot.paramMap.get('id');
    this.getPost()
   }



  getPost(){
    const headers = new HttpHeaders({"app-id": "63044dfc6a97404475895aa4"});
    const requestOptions = { headers: headers };
    let url="https://dummyapi.io/data/v1/user/" + this.blogId;
    this.http.get(url,requestOptions).subscribe((posts : any) => {
      this.posts = posts;
    });
  }



  ngOnInit(): void {
  }

}
