import { Component, Input, OnInit } from '@angular/core';
import { Genre } from '../genre';
import { GenreService } from '../genre.service';

@Component({
  selector: 'app-genre-detail',
  templateUrl: './genre-detail.component.html',
  styleUrls: ['./genre-detail.component.css']
})
export class GenreDetailComponent implements OnInit {
  
  @Input() genreDetail!: Genre;

  constructor(private genreService: GenreService) { }

  ngOnInit() {
    this.getGenre();
  }

  getGenre(): void {
    this.genreService.getOneGenreById(this.genreDetail.id).subscribe((genre) => {
      this.genreDetail = genre;
    });
  }
}
