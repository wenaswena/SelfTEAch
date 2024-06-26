import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DifficultiesPageRoutingModule } from './difficulties-routing.module';

import { DifficultiesPage } from './difficulties.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DifficultiesPageRoutingModule
  ],
  declarations: [DifficultiesPage]
})
export class DifficultiesPageModule {}
