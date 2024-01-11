import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { Genre } from '../genre';
import { GenreService } from '../genre.service';

@Component({
  selector: 'app-genre-create',
  templateUrl: './genre-create.component.html',
  styleUrls: ['./genre-create.component.css']
})
export class GenreCreateComponent implements OnInit {

  genreForm!: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private genreService: GenreService
  ) { }

  createGenre(genre: Genre){
    this.genreService.createGenre(genre).subscribe(genre=>{
      console.info("The genre was created: ", genre)
      this.toastr.success("Confirmation", "Genre created")
      this.genreForm.reset();
    })
  }

  cancelCreation(){
    this.genreForm.reset();
  }

  ngOnInit() {
    this.genreForm = this.formBuilder.group({
      type: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(100)]]
    })
  }

}
