import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'r-usuario',
    loadComponent: () => import('./r-usuario/r-usuario.page').then( m => m.RUsuarioPage)
  },
  {
    path: 'l-usuario',
    loadComponent: () => import('./l-usuario/l-usuario.page').then( m => m.LUsuarioPage)
  },
];
