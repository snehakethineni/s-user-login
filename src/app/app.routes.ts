import { Routes } from '@angular/router';
import { LoginPanelComponent } from './login-panel/login-panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginPanelComponent,
  },
];
