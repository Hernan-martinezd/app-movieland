import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component'; 
import { MovieCreateComponent } from './movie-create/movie-create.component';
import { MovieRoutingModule } from './movie-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MovieRoutingModule,
    ReactiveFormsModule
  ],
  exports: [MovieListComponent],
  declarations: [MovieListComponent, MovieDetailComponent, MovieCreateComponent]
})
export class MovieModule { }