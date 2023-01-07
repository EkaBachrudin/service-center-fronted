import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardUserCounterComponent } from './components/dashboard-user-counter/dashboard-user-counter.component';
import {ContentModule} from "../../../shared/content/content.module";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const routes = [
  {
    path: 'user',
    component: DashboardUserCounterComponent,
  },
];

@NgModule({
  declarations: [
    DashboardUserCounterComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        ContentModule,
    ]
})
export class DashboardUserCounterModule { }
