import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieFormComponent } from './movie-form/movie-form.component';

const routes: Routes = [
  {
    path: 'movies', component: MovieListComponent
  },
  {
    path: 'movies/:movieId', component: MovieDetailsComponent
  },
  {
    path: 'create-movie', component: MovieFormComponent
  },
  {
    path: '', redirectTo: 'movies', pathMatch: 'full'
  }
];

// TODO créer une page 404

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
