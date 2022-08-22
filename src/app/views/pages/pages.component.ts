import { Component, OnInit } from '@angular/core';
import blogsJson from '../shared/blogs.json';


interface blogs{
  id: number;
  title: string;
  content: string;
  img: string;
}

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  blogs: blogs[] = blogsJson.data;

  constructor(

  ) { }

  ngOnInit() {

  }

}
