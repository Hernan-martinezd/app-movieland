import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable, catchError, throwError } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl: string = environment.baseUrl + '/movies';

  constructor(private http: HttpClient) {}

  
  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl).pipe(catchError(err=> throwError(() => new Error('Error en el servicio'))));
  }

  getOneMovieById(movieId: string): Observable<Movie> {
    return this.http.get<Movie>(this.apiUrl + '/' + movieId).pipe(catchError(err=> throwError(() => new Error('Error en el servicio'))));
  }

  createMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.apiUrl, movie);
  }

}