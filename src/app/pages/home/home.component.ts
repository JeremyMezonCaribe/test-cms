import { Component, OnInit } from '@angular/core';
import { IBlog } from 'src/app/interfaces/blog';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogs:IBlog;

  constructor(private blogService:BlogsService) { }

  async ngOnInit(): Promise<void> {
    this.blogs = await this.blogService.getAllBlogs()

  }

}
