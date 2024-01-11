import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable, catchError, throwError } from 'rxjs';
import { Platform } from './platform';

@Injectable({
  providedIn: 'root',
})
export class PlatformService {
  private apiUrl: string = environment.baseUrl + '/platforms';

  constructor(private http: HttpClient) {}

  getPlatforms(): Observable<Platform[]> {
    return this.http.get<Platform[]>(this.apiUrl).pipe(catchError(err=> throwError(() => new Error('Error en el servicio'))));
  }

  getOnePlatformById(platformId: string): Observable<Platform> {
    return this.http.get<Platform>(this.apiUrl + '/' + platformId).pipe(catchError(err=> throwError(() => new Error('Error en el servicio'))));
  }

  createPlatform(platform: Platform): Observable<Platform> {
    return this.http.post<Platform>(this.apiUrl, platform);
  }
}