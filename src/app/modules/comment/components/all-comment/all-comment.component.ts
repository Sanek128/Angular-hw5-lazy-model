import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/Comment';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-all-comment',
  templateUrl: './all-comment.component.html',
  styleUrls: ['./all-comment.component.css']
})
export class AllCommentComponent implements OnInit {

  commentsList: Comment[];

  constructor(private commentService: CommentService) { 
    this.commentService.getComments().subscribe (value => this.commentsList = value);
  }


  ngOnInit(): void {
  }

}
