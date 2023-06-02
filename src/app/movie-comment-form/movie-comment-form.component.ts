import { Component, EventEmitter, Output } from '@angular/core';
import { MovieComment } from '../models/movie-comment.model';

@Component({
  selector: 'app-movie-comment-form',
  templateUrl: './movie-comment-form.component.html',
  styleUrls: ['./movie-comment-form.component.css']
})
export class MovieCommentFormComponent {

  username: string = '';
  comment: string = '';

  @Output()
  newCommentEmitter: EventEmitter<MovieComment> = new EventEmitter<MovieComment>();

  onSubmit() {
    // créer un commentaire à partir du modèle MovieComment
    const movieComment = new MovieComment(this.username, this.comment);
    this.newCommentEmitter.emit(movieComment);
    this.comment = '';
  }
}
