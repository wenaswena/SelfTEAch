import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DifficultiesPage } from './difficulties.page';

const routes: Routes = [
  {
    path: '',
    component: DifficultiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DifficultiesPageRoutingModule {}
