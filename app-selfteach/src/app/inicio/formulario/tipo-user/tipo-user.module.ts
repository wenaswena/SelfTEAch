import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TipoUserPageRoutingModule } from './tipo-user-routing.module';

import { TipoUserPage } from './tipo-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipoUserPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TipoUserPage]
})
export class TipoUserPageModule {}
