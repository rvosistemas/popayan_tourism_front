import { Routes } from '@angular/router';
import { NotFoundComponent } from '@/info/pages/not-found/not-found.component';
import { DynamicBoardComponent } from './shared/components/board/dynamic-board/dynamic-board.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('@/auth/route/auth-routing.module').then(m => m.AuthRoutingModule)
  },
  {
    path: 'dashboard',
    component: DynamicBoardComponent,
    children: [
      {
        path: 'cultural-places',
        loadComponent: () => import('@/culturalPlaces/components/cultural-places-list/cultural-places-list.component').then(m => m.CulturalPlacesListComponent)
      },
      // {
      //   path: 'activities',
      //   loadComponent: () => import('@/activities/components/activities-list/activities-list.component').then(m => m.ActivitiesListComponent)
      // },
      {
        path: '',
        redirectTo: 'cultural-places',
        pathMatch: 'full'
      }
    ]
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
