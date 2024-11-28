import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-nivel-desa',
  templateUrl: './nivel-desa.page.html',
  styleUrls: ['./nivel-desa.page.scss'],
})
export class NivelDesaPage {

  constructor(private navCtrl: NavController) {}

  // Método para ir a la página de dificultades
  goToDifficulties(nivel: number) {
    this.navCtrl.navigateForward(`/difficulties`, {
      queryParams: { nivel: nivel }
    });
  }

  // Método para ir a la página de información del nivel
  goToInfoNivel(nivel: number) {
    this.navCtrl.navigateForward(`/info-nivel`, {
      queryParams: { nivel: nivel }
    });
  }

  // Método para regresar
  goBack() {
    this.navCtrl.back();
  }
}
