import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenreListComponent } from './genre-list/genre-list.component'; 
import { GenreDetailComponent } from './genre-detail/genre-detail.component';
import { RouterModule } from '@angular/router';
import { GenreCreateComponent } from './genre-create/genre-create.component';
import { GenreRoutingModule } from './genre-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    GenreRoutingModule,
    ReactiveFormsModule
  ],
  exports: [GenreListComponent, GenreDetailComponent],
  declarations: [GenreListComponent, GenreDetailComponent, GenreCreateComponent]
})
export class GenreModule { }
