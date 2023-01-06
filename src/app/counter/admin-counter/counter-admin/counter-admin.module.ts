import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterAdminComponent } from './components/counter-admin/counter-admin.component';
import {ContentModule} from "../../../shared/content/content.module";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddCounterComponent } from './components/add-counter/add-counter.component';

const routes = [
  {
    path: 'admin/counter',
    component: CounterAdminComponent,
  },
  {
    path: 'admin/counter/add',
    component: AddCounterComponent,
  },
];

@NgModule({
  declarations: [
    CounterAdminComponent,
    AddCounterComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        ContentModule,
    ]
})
export class CounterAdminModule { }
