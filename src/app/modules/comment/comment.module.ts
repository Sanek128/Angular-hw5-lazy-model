import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCommentComponent } from './components/all-comment/all-comment.component';
import { CommentComponent } from './components/comment/comment.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommentService } from './services/comment.service';



@NgModule({
  declarations: [AllCommentComponent, CommentComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild ([
      {path: 'comments', component: AllCommentComponent}
    ])
  ],
  providers: [CommentService]
})
export class CommentModule { }
