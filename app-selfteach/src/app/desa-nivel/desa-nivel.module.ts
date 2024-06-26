import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesaNivelPageRoutingModule } from './desa-nivel-routing.module';

import { DesaNivelPage } from './desa-nivel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesaNivelPageRoutingModule
  ],
  declarations: [DesaNivelPage]
})
export class DesaNivelPageModule {}
