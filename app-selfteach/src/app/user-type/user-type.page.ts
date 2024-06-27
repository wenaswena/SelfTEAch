import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-user-type',
  templateUrl: './user-type.page.html',
  styleUrls: ['./user-type.page.scss'],
})
export class UserTypePage {
  constructor(private navCtrl: NavController) {}

  nextPage() {
    this.navCtrl.navigateForward('/desa-nivel');
  }
}
