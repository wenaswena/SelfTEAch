import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio-presentacion',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPresentacionPage {
  constructor(private navCtrl: NavController) {}

  navigateToForm() {
    this.navCtrl.navigateForward('/formulario');
  }
}
