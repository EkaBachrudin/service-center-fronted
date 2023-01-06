import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminCounterModule} from "./admin-counter/admin-counter.module";
import {CounterAdminModule} from "./admin-counter/counter-admin/counter-admin.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminCounterModule,
    CounterAdminModule
  ]
})
export class CounterModule { }
