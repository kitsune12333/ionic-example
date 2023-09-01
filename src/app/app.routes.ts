import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./ingreso-de-usuario/ingreso-de-usuario.page').then( m => m.IngresoDeUsuarioPage)
  },
  {
    path: 'home/:id',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
   
  {
    path: '**',
    redirectTo: 'ingreso-de-usuario'
  }
];