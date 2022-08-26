import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: any;
  // blogId?: string | null;


  constructor(private http: HttpClient, private route:ActivatedRoute) {
    // this.blogId = this.route.snapshot.paramMap.get('id');
    this.getData()
  }


  getData(){
    const headers = new HttpHeaders({"app-id": "63044dfc6a97404475895aa4"});
    const requestOptions = { headers: headers };
    let url="https://dummyapi.io/data/v1/user?created=1";
    this.http.get(url,requestOptions).subscribe((posts : any) => {
      this.posts = posts.data;
    });
  }

  delete(id:string){
    const headers = new HttpHeaders({"app-id": "63044dfc6a97404475895aa4"});
    const requestOptions = { headers: headers };
    let url="https://dummyapi.io/data/v1/user/" + id;
    this.http.delete(url,requestOptions).subscribe(()=>{
      this.getData()
    })

  }

  ngOnInit(): void {

  }

}
