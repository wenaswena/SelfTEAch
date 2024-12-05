import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-formulario',
    templateUrl: './formulario.page.html',
    styleUrls: ['./formulario.page.scss'],
    standalone: false
})
export class FormularioPage {
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['formulario/tipo-user']);
  }
}