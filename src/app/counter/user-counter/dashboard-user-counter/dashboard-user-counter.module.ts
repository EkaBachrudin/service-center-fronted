import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardUserCounterComponent } from './components/dashboard-user-counter/dashboard-user-counter.component';
import { ContentModule } from '../../../shared/content/content.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from 'src/app/shared/auth/auth.guard';
import { RoleGuard } from 'src/app/shared/auth/role.guard';

const routes = [
  {
    path: 'user',
    component: DashboardUserCounterComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      breadCum: 'user / dashboard',
      role: 'User Counter',
    },
  },
];

@NgModule({
  declarations: [DashboardUserCounterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    ContentModule,
  ],
})
export class DashboardUserCounterModule {}
