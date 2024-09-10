import { Routes } from '@angular/router';
import { NotFoundComponent } from '@/info/pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('@/auth/route/auth-routing.module').then(m => m.AuthRoutingModule)
  },
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
