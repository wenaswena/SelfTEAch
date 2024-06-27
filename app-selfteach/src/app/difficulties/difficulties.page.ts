import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-difficulties',
  templateUrl: './difficulties.page.html',
  styleUrls: ['./difficulties.page.scss'],
})
export class DifficultiesPage {
  constructor(private navCtrl: NavController) {}

  submitForm() {
    console.log('Formulario enviado');
    // Aquí puedes añadir la lógica para enviar el formulario
  }
}
