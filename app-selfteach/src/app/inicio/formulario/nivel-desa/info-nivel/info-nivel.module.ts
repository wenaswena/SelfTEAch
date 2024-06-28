import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoNivelPageRoutingModule } from './info-nivel-routing.module';

import { InfoNivelPage } from './info-nivel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoNivelPageRoutingModule
  ],
  declarations: [InfoNivelPage]
})
export class InfoNivelPageModule {}
