import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  postsList: Post[];

  constructor(private postService: PostService) { 
    this.postService.getAllPosts().subscribe(value => this.postsList = value);
  }

  ngOnInit(): void {
  }

}
