import { Component } from '@angular/core';

@Component({
  selector: 'app-nivel-desa',
  templateUrl: './nivel-desa.page.html',
  styleUrls: ['./nivel-desa.page.scss']
})
export class NivelDesaPage {
  rol: string;

  constructor() {
    this.rol = localStorage.getItem('rol')?? '';
  }
}