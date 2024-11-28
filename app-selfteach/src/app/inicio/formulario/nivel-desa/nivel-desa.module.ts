import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NivelDesaPageRoutingModule } from './nivel-desa-routing.module';
import { NivelDesaPage } from './nivel-desa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NivelDesaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NivelDesaPage]
})
export class NivelDesaPageModule {}
