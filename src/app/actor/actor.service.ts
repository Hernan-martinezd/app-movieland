import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable, catchError, throwError } from 'rxjs';
import { Actor } from './actor';

@Injectable({
  providedIn: 'root',
})
export class ActorService {
  private apiUrl: string = environment.baseUrl + '/actors';

  constructor(private http: HttpClient) {}

  getActors(): Observable<Actor[]> {
    return this.http.get<Actor[]>(this.apiUrl).pipe(catchError(err=> throwError(() => new Error('Error en el servicio'))));
  }

  getOneActorById(actorId: string): Observable<Actor> {
    return this.http.get<Actor>(this.apiUrl + '/' + actorId).pipe(catchError(err=> throwError(() => new Error('Error en el servicio'))));
  }

  createActor(actor: Actor): Observable<Actor> {
    return this.http.post<Actor>(this.apiUrl, actor);
  }

}
