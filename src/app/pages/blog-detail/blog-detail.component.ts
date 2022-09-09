import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBlog } from 'src/app/interfaces/blog';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  blog:IBlog;

  constructor(
    private route:ActivatedRoute,
    private blogService: BlogsService
  ) { }

  async ngOnInit(): Promise<void> {
    const slug:string = await this.route.snapshot.params.slug;
    console.log(slug)
    this.blog = (await this.blogService.getBlogsBySlug(slug))[0];

  }

}
