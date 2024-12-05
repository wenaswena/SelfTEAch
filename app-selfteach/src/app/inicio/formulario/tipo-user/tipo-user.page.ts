import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-tipo-user',
    templateUrl: './tipo-user.page.html',
    styleUrls: ['./tipo-user.page.scss'],
    standalone: false
})
export class TipoUserPage {
  formulario: FormGroup;
  rol: string = '';

  constructor(private router: Router) {
    this.formulario = new FormGroup({
      tipoUser: new FormControl('')
    });
  }

  seleccionarCuidador() {
    this.rol = 'Cuidador/a';
    localStorage.setItem('rol', this.rol);
    this.router.navigate(['/nivel-desa']);
  }

  seleccionarTEA() {
    this.rol = 'Persona con TEA';
    localStorage.setItem('rol', this.rol);
    this.router.navigate(['/nivel-desa']);
  }
}