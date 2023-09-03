import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'ingreso-de-usuario',
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
    path: 'restablecer-contra',
    loadComponent: () => import('./restablecer-contra/restablecer-contra.page').then( m => m.RestablecerContraPage)
  },

  {
    path: '**',
    redirectTo: 'ingreso-de-usuario'
  }
];