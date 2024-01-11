import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable, catchError, throwError } from 'rxjs';
import { Genre } from './genre';

@Injectable({
  providedIn: 'root',
})
export class GenreService {
  private apiUrl: string = environment.baseUrl + '/genres';

  constructor(private http: HttpClient) {}

  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.apiUrl).pipe(catchError(err=> throwError(() => new Error('Error en el servicio'))));
  }

  getOneGenreById(genreId: string): Observable<Genre> {
    return this.http.get<Genre>(this.apiUrl + '/' + genreId).pipe(catchError(err=> throwError(() => new Error('Error en el servicio'))));
  }

  createGenre(genre: Genre): Observable<Genre> {
    return this.http.post<Genre>(this.apiUrl, genre);
  }

}
