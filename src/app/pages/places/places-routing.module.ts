import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesPage } from './places.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/places/tabs/discover',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    component: PlacesPage,
    children: [
      {
        path: 'discover',
        loadChildren: () =>
          import('./discover/discover-routing.module').then(
            (m) => m.DiscoverPageRoutingModule
          ),
      },
      {
        path: 'offers',
        loadChildren: () =>
          import('./offers/offers.module').then((m) => m.OffersPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule {}
