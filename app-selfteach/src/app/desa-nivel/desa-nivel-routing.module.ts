import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesaNivelPage } from './desa-nivel.page';

const routes: Routes = [
  {
    path: '',
    component: DesaNivelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesaNivelPageRoutingModule {}
