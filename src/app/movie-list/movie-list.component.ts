import { Component } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MOVIE_LIST } from '../models/movie.mock';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {

  movieList: Movie[] = MOVIE_LIST;
}
