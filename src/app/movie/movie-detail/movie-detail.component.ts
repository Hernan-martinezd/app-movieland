import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input() movieDetail!: Movie;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovie();
  }

  getMovie(): void{
    this.movieService.getOneMovieById(this.movieDetail.id).subscribe((movie) => {
      this.movieDetail = movie;
    });
  }

}