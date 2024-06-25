import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-presentacion',
  templateUrl: './inicio-presentacion.page.html',
  styleUrls: ['./inicio-presentacion.page.scss'],
})
export class InicioPresentacionPage implements OnInit {

  constructor(private router: Router) {}

  navigateToFormulario() { // Change function name
    this.router.navigate(['/tabs/tab1']); // Navigate to tab1
  }
  
  ngOnInit() {
    setTimeout(this.navigateToFormulario, 6000); // Llama a navigateToLogin después de 6 segundos
  }
}
