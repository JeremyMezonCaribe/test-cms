import { Component, Input, OnInit } from '@angular/core';
import { IBlog } from 'src/app/interfaces/blog';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {

  @Input() blog:IBlog

  constructor() { }

  ngOnInit(): void {
    console.log(this.blog)
  }

}
