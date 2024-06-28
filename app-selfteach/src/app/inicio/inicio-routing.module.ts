import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioPresentacionPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPresentacionPage
  },
  {
    path: 'formulario',
    loadChildren: () => import('./formulario/formulario.module').then( m => m.FormularioPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
