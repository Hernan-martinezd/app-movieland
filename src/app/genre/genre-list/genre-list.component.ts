import { Component, OnInit } from '@angular/core';
import { Genre } from '../genre';
import { GenreService } from '../genre.service';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent implements OnInit {

  genres: Array<Genre> = [];
  selectedGenre!: Genre;
  selected: boolean = false;

  constructor(private genreService: GenreService) { }

  getGenres(): void{
    this.genreService.getGenres().subscribe({next: genres => 
      this.genres = genres, error: e => console.error(e)})
  }

  ngOnInit() {
    this.getGenres();
  }

  onSelected(genre: Genre): void {
    console.log("OnSelected")
    this.selected = true;
    this.selectedGenre = genre;
  }

}
