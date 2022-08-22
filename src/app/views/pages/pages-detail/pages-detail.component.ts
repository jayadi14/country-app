import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import blogsJson from 'src/app/views/shared/blogs.json';

interface blog{
  id: number;
  title: string;
  content: string;
  img: string;
}

@Component({
  selector: 'app-pages-detail',
  templateUrl: './pages-detail.component.html',
  styleUrls: ['./pages-detail.component.css']
})
export class PagesDetailComponent implements OnInit {

  blogs: blog[] = blogsJson.data;
  blog?: blog;
  blogId!: number;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.blogId = Number(this.route.snapshot.paramMap.get('id'));
    this.blog = this.blogs.find((blog:blog)=>this.blogId == blog.id);
  }
}
