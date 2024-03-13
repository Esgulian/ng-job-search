import { Routes } from '@angular/router';
import { JobsComponent } from './views/jobs/jobs.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';
import { JobsResolverService } from './service/resolver/jobs-resolver.service';
import { FavoritesComponent } from './views/favorites/favorites.component';
import { JobDetailResolverService } from './service/resolver/job-detail-resolver.service';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/jobs',
  },
  {
    path: 'jobs',
    component: JobsComponent,
    resolve: {
      jobs: JobsResolverService,
    },
  },
  {
    path: 'jobs/:id',
    component: JobDetailComponent,
    resolve: {
      jobs: JobDetailResolverService,
    },
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/jobs',
  },
];
