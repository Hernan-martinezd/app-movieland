import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {

  movies: Array<Movie> = [];
  selectedMovie!: Movie;
  selected: boolean = false;

  constructor(private movieService: MovieService) {}

  getMovies(): void{
    this.movieService.getMovies().subscribe((movies) =>{
      this.movies = movies;
    })
  }

  ngOnInit() {
    this.getMovies();
  }

  onSelected(movie: Movie): void {

    this.selected = true;
    this.selectedMovie = movie;
  }

}

