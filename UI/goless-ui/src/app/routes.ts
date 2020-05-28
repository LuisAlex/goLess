import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {ProgressComponent} from './pages/progress/progress.component';
import {Grafcias1Component} from './shared/grafcias1/grafcias1.component';
import {NopagefoundComponent} from './shared/nopagefound/nopagefound.component';
import {PagesComponent} from './pages/pages.component';
import {RegisterComponent} from './login/register.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent},
      { path: 'progress', component: ProgressComponent},
      { path: 'graficas1', component: Grafcias1Component},
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', component: NopagefoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true});
