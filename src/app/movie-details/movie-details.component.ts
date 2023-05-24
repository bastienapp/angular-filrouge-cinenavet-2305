import { Component } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MOVIE_LIST } from '../models/movie.mock';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent {

  title: string = "CinéNavet";
  movieList: Movie[] = MOVIE_LIST;
  movieDetails: Movie = this.movieList[1];
  favourite: boolean = false;

  constructor(private toastr: ToastrService) { }

  addToFavourite() {
    if (!this.favourite) {
      this.toastr.success(`${this.movieDetails.title} a été ajouté aux favoris`)
      this.favourite = true;
    } else {
      this.toastr.warning(`${this.movieDetails.title} est déjà dans vos favoris`)
    }
  }
}
