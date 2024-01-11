import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlatformListComponent } from './platform-list/platform-list.component';
import { PlatformDetailComponent } from './platform-detail/platform-detail.component';
import { PlatformCreateComponent } from './platform-create/platform-create.component';

const routes: Routes = [{
  path: 'platforms',
  children: [
    {
      path: 'create',
      component: PlatformCreateComponent
    },
    {
      path: 'list',
      component: PlatformListComponent
    },
    {
      path: ':id',
      component: PlatformDetailComponent
    },
  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
 })
export class PlatformRoutingModule { }