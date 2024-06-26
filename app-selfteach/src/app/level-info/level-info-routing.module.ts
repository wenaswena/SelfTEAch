import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelInfoPage } from './level-info.page';

const routes: Routes = [
  {
    path: '',
    component: LevelInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelInfoPageRoutingModule {}
