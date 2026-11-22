import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard')
        .then(m => m.Dashboard)
  },
  {
    path: 'bienes',
    loadComponent: () =>
      import('./features/bienes/bienes')
        .then(m => m.Bienes)
  },
  {
    path: 'funcionarios',
    loadComponent: () =>
      import('./features/funcionarios/funcionarios')
        .then(m => m.Funcionarios)
  }
];
