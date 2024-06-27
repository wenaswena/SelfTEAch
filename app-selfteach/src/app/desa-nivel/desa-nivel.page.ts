import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-desa-nivel',
  templateUrl: './desa-nivel.page.html',
  styleUrls: ['./desa-nivel.page.scss'],
})
export class DesaNivelPage {
  constructor(private navCtrl: NavController) {}

  showInfo(level: string) {
    this.navCtrl.navigateForward(`/level-info/${level}`);
  }

  nextPage() {
    this.navCtrl.navigateForward('/some-next-page');
  }
}
