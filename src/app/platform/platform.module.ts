import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatformListComponent } from './platform-list/platform-list.component'; 
import { PlatformDetailComponent } from './platform-detail/platform-detail.component';
import { RouterModule } from '@angular/router';
import { PlatformCreateComponent } from './platform-create/platform-create.component';
import { PlatformRoutingModule } from './platform-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PlatformRoutingModule,
    ReactiveFormsModule
  ],
  exports: [PlatformListComponent, PlatformDetailComponent],
  declarations: [PlatformListComponent, PlatformDetailComponent, PlatformCreateComponent]
})
export class PlatformModule { }