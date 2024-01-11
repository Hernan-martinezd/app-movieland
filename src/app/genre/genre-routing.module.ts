import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenreListComponent } from './genre-list/genre-list.component';
import { GenreDetailComponent } from './genre-detail/genre-detail.component';
import { GenreCreateComponent } from './genre-create/genre-create.component';

const routes: Routes = [{
  path: 'genres',
  children: [
    {
      path: 'create',
      component: GenreCreateComponent
    },
    {
      path: 'list',
      component: GenreListComponent
    },
    {
      path: ':id',
      component: GenreDetailComponent
    },
  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
 })
export class GenreRoutingModule { }
