import { Component } from '@angular/core';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent {

  movie: Movie = new Movie('', '', '', '', 0, false)

  createMovie() {
    //alert(`Movie ${this.movieTitle} created`)
  }
}
