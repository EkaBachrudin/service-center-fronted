import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardAdminCounterComponent } from './components/dashboard-admin-counter/dashboard-admin-counter.component';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ContentModule} from "../../../shared/content/content.module";

const routes = [
  {
    path: 'admin',
    component: DashboardAdminCounterComponent,
  },
];

@NgModule({
  declarations: [
    DashboardAdminCounterComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        ContentModule,
    ]
})
export class DashboardAdminCounterModule { }
