import { Routes } from '@angular/router';
import { LoginPanelComponent } from './login-panel/login-panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'login',
    component: LoginPanelComponent,
  },
];
