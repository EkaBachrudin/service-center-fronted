import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardUserCounterModule} from "./dashboard-user-counter/dashboard-user-counter.module";
import {CounterUserModule} from "./counter-user/counter-user.module";




@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    DashboardUserCounterModule,
    CounterUserModule
  ]
})
export class UserCounterModule { }
