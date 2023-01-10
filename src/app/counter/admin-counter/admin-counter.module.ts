import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardAdminCounterModule } from './dashboard-admin-counter/dashboard-admin-counter.module';
import { CounterAdminModule } from './counter-admin/counter-admin.module';

@NgModule({
  declarations: [],
  imports: [CounterAdminModule, DashboardAdminCounterModule],
})
export class AdminCounterModule {}
