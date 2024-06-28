import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DificultadesPageRoutingModule } from './dificultades-routing.module';

import { DificultadesPage } from './dificultades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DificultadesPageRoutingModule
  ],
  declarations: [DificultadesPage]
})
export class DificultadesPageModule {}
