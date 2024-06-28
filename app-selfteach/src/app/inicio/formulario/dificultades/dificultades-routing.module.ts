import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DificultadesPage } from './dificultades.page';

const routes: Routes = [
  {
    path: '',
    component: DificultadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DificultadesPageRoutingModule {}
