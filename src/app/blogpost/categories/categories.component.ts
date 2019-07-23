import { Component, OnInit } from '@angular/core';
import { BlogpostService } from '../blogpost.service';
import { Category } from '../category';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category;
  error: {};

  constructor(private blogpostService: BlogpostService, private authService: AuthService) { }

  ngOnInit() {
    
    this.blogpostService.getCategories().subscribe(
      (data: Category) => {
        this.categories = data;
        console.log('data', data);
      }
    );
  }

}
