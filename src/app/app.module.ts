import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from '../app/app-routing.module';
import { AppComponent } from './app.component';
import { PlatformModule } from './platform/platform.module';
import { GenreModule } from './genre/genre.module';
import { MovieModule } from './movie/movie.module';
import { PlatformRoutingModule } from './platform/platform-routing.module';
import { GenreRoutingModule } from './genre/genre-routing.module';
import { MovieRoutingModule } from './movie/movie-routing.module';
import { HttpErrorInterceptorService } from './interceptors/http-error-interceptor.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActorRoutingModule } from './actor/actor-routing.module';
import { ActorModule } from './actor/actor.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PlatformModule,
    GenreModule,
    MovieModule,
    ActorModule,
    PlatformRoutingModule,
    GenreRoutingModule,
    MovieRoutingModule,
    ActorRoutingModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      }
    ),
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }