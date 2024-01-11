import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorListComponent } from './actor-list/actor-list.component'; 
import { ActorCreateComponent } from './actor-create/actor-create.component'; 

const routes: Routes = [{
  path: 'actors',
  children: [
    {
      path: 'create',
      component: ActorCreateComponent
    },
    {
      path: 'list',
      component: ActorListComponent
    },
  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
 })
export class ActorRoutingModule { }
