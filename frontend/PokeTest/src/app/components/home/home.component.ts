import { Blog } from './../../Models/blog.model';
import { HomeService } from './../../services/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogs: Blog[] | undefined;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.read().subscribe(blog =>
      {
        this.blogs = blog
      })
  }

}
