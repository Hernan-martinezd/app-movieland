import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActorListComponent } from './actor-list/actor-list.component'; 
import { ActorCreateComponent } from './actor-create/actor-create.component';
import { ActorRoutingModule } from './actor-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ActorRoutingModule,
    ReactiveFormsModule
  ],
  exports: [ActorListComponent],
  declarations: [ActorListComponent, ActorCreateComponent]
})
export class ActorModule { }
