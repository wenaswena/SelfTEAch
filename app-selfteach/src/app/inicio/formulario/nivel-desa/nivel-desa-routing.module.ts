import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NivelDesaPage } from './nivel-desa.page';

const routes: Routes = [
  {
    path: '',
    component: NivelDesaPage
  },  {
    path: 'info-nivel',
    loadChildren: () => import('./info-nivel/info-nivel.module').then( m => m.InfoNivelPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NivelDesaPageRoutingModule {}
