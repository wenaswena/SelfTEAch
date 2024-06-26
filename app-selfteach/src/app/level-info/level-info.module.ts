import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelInfoPageRoutingModule } from './level-info-routing.module';

import { LevelInfoPage } from './level-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelInfoPageRoutingModule
  ],
  declarations: [LevelInfoPage]
})
export class LevelInfoPageModule {}
