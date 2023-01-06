import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterAdminComponent } from './components/counter-admin/counter-admin.component';
import {ContentModule} from "../../../shared/content/content.module";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const routes = [
  {
    path: 'admin/counter',
    component: CounterAdminComponent,
  },
];

@NgModule({
  declarations: [
    CounterAdminComponent
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
