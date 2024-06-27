import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio-presentacion', pathMatch: 'full' },
  { path: 'inicio-presentacion', loadChildren: () => import('./inicio-presentacion/inicio-presentacion.module').then(m => m.InicioPresentacionPageModule) },
  { path: 'formulario', loadChildren: () => import('./formulario/tab1.module').then(m => m.Tab1PageModule) },
  {
    path: 'user-type',
    loadChildren: () => import('./user-type/user-type.module').then( m => m.UserTypePageModule)
  },
  {
    path: 'desa-nivel',
    loadChildren: () => import('./desa-nivel/desa-nivel.module').then( m => m.DesaNivelPageModule)
  },
  {
    path: 'level-info',
    loadChildren: () => import('./level-info/level-info.module').then( m => m.LevelInfoPageModule)
  },
  {
    path: 'difficulties',
    loadChildren: () => import('./difficulties/difficulties.module').then( m => m.DifficultiesPageModule)
  },
  // otras rutas
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
