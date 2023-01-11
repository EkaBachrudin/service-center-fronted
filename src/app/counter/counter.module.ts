import { NgModule } from '@angular/core';
import { AdminCounterModule } from './admin-counter/admin-counter.module';
import { CounterAdminModule } from './admin-counter/counter-admin/counter-admin.module';
import { UserCounterModule } from './user-counter/user-counter.module';

@NgModule({
  declarations: [],
  imports: [AdminCounterModule, CounterAdminModule, UserCounterModule],
})
export class CounterModule {}
