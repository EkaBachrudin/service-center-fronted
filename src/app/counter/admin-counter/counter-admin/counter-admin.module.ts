import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterAdminComponent } from './components/counter-admin/counter-admin.component';
import {ContentModule} from "../../../shared/content/content.module";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddCounterComponent } from './components/add-counter/add-counter.component';
import { EditCounterComponent } from './components/edit-counter/edit-counter.component';
import { ReportCounterComponent } from './components/report-counter/report-counter.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatNativeDateModule} from "@angular/material/core";

const routes = [
  {
    path: 'admin/counter',
    component: CounterAdminComponent,
  },
  {
    path: 'admin/counter/add',
    component: AddCounterComponent,
  },
  {
    path: 'admin/counter/edit',
    component: EditCounterComponent,
  },
  {
    path: 'admin/counter/report',
    component: ReportCounterComponent,
  },
];

@NgModule({
  declarations: [
    CounterAdminComponent,
    AddCounterComponent,
    EditCounterComponent,
    ReportCounterComponent,
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        ContentModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatNativeDateModule,
    ]
})
export class CounterAdminModule { }
