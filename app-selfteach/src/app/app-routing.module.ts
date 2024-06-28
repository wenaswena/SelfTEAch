import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio-presentacion', pathMatch: 'full' },
  { path: 'inicio-presentacion', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPresentacionPageModule) },
  { path: 'formulario', loadChildren: () => import('./inicio/formulario/tipo-user/tipo-user.module').then(m => m.TipoUserPageModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'modulos', loadChildren: () => import('./home/modulos/modulos.module').then(m => m.ModulosPageModule) },
  // Otras rutas necesarias según tu aplicación
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
