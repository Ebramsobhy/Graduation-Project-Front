import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from '../../models/post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  posts!: Post[];
  categories!: string[];
  recentPosts!: Post[];

  constructor() { }

  
}
