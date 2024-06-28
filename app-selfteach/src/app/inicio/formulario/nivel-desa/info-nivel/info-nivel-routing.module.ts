import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoNivelPage } from './info-nivel.page';

const routes: Routes = [
  {
    path: '',
    component: InfoNivelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoNivelPageRoutingModule {}
