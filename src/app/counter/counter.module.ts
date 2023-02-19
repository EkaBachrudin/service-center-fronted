import { NgModule } from '@angular/core';
import { AdminCounterModule } from './admin-counter/admin-counter.module';
import { CounterAdminModule } from './admin-counter/counter-admin/counter-admin.module';
import { UserCounterModule } from './user-counter/user-counter.module';
import { VisitorModule } from './visitor/visitor.module';

@NgModule({
  declarations: [],
  imports: [
    AdminCounterModule,
    CounterAdminModule,
    UserCounterModule,
    VisitorModule,
  ],
})
export class CounterModule {}
