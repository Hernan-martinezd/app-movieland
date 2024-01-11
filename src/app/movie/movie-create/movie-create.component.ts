import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {

  movieForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private movieService: MovieService
  ) { }

  createMovie(movie: Movie){
    this.movieService.createMovie(movie).subscribe(movie=>{
      console.info("The movie was created: ", movie)
      this.toastr.success("Confirmation", "Movie created")
      this.movieForm.reset();
    })
  }

  cancelCreation(){
    this.movieForm.reset();
  }

  ngOnInit() {
    this.movieForm = this.formBuilder.group({
      title: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(100)]],
      poster: ["", Validators.required],
      countryy: ["", Validators.required],
      duration: ["", Validators.required],
      releaseDate: ["", Validators.required]
    })
  }

}    