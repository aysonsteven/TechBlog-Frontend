import { Component, OnInit } from '@angular/core';
import { BlogpostService } from '../blogpost.service';
import { Blogpost } from '../blogpost';

@Component({
  selector: 'app-blogpost-featured',
  templateUrl: './blogpost-featured.component.html',
  styleUrls: ['./blogpost-featured.component.css']
})
export class BlogpostFeaturedComponent implements OnInit {

  blogs: any;
  error: {};

  constructor(
    private blogpostService: BlogpostService
  ) { }

  ngOnInit() {
    this.blogpostService.getCategories().subscribe(
      (data: any) => {
        this.blogs = data
        console.log('data', data)
      },
      error => this.error = error
    );
  }

}
