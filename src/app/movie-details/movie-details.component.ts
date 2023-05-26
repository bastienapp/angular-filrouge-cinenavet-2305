import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MOVIE_LIST } from '../models/movie.mock';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent implements OnInit {

  title: string = "CinéNavet";
  movieList: Movie[] = MOVIE_LIST;
  movieDetails: Movie | undefined;
  favourite: boolean = false;

  // ne faire que de l'injection de dépendance dans le constructeur
  constructor(
    private toastr: ToastrService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const mId: string | null = this.actRoute.snapshot.paramMap.get("movieId")
    if (mId) {
      this.movieDetails = this.movieList.find((movie) => movie.id === mId);
    }
    if (!this.movieDetails) {
      this.toastr.error("Ce film n'existe pas")
      this.router.navigate(["/movies"])
    }
  }

  addToFavourite() {
    if (!this.favourite) {
      this.toastr.success(`${this.movieDetails?.title} a été ajouté aux favoris`)
      this.favourite = true;
    } else {
      this.toastr.warning(`${this.movieDetails?.title} est déjà dans vos favoris`)
    }
  }
}
