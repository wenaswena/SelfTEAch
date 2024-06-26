import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio-presentacion',
  templateUrl: './inicio-presentacion.page.html',
  styleUrls: ['./inicio-presentacion.page.scss'],
})
export class InicioPresentacionPage {
  constructor(private navCtrl: NavController) {}

  navigateToForm() {
    this.navCtrl.navigateForward('/formulario');
  }
}
