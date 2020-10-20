import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/models/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) { }

  getComments(): Observable <Comment[]> {
    return this.httpClient.get <Comment[]> ('https://jsonplaceholder.typicode.com/comments')
  }
}
