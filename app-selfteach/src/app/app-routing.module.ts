import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio-presentacion', pathMatch: 'full' },
  { path: 'inicio-presentacion', loadChildren: () => import('./inicio-presentacion/inicio-presentacion.module').then(m => m.InicioPresentacionPageModule) },
  { path: 'formulario', loadChildren: () => import('./formulario/tab1.module').then(m => m.Tab1PageModule) },
  // otras rutas
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
