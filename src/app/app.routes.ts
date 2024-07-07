import { Routes } from '@angular/router';


import { NotFoundComponent } from '@/info/pages/not-found/not-found.component';
// import { LayoutComponent } from '@/shared/components/layout/layout.component';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('@/auth/components/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('@/auth/components/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
