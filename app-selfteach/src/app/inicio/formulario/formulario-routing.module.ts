import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioPage } from './formulario.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioPage
  },
  {
    path: 'tipo-user',
    loadChildren: () => import('./tipo-user/tipo-user.module').then( m => m.TipoUserPageModule)
  },
  {
    path: 'nivel-desa',
    loadChildren: () => import('./nivel-desa/nivel-desa.module').then( m => m.NivelDesaPageModule)
  },
  {
    path: 'dificultades',
    loadChildren: () => import('./dificultades/dificultades.module').then( m => m.DificultadesPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioPageRoutingModule {}
