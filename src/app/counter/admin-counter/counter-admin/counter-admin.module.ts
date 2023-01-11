import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterAdminComponent } from './components/counter-admin/counter-admin.component';
import { ContentModule } from '../../../shared/content/content.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCounterComponent } from './components/add-counter/add-counter.component';
import { EditCounterComponent } from './components/edit-counter/edit-counter.component';
import { ReportCounterComponent } from './components/report-counter/report-counter.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { AuthGuard } from 'src/app/shared/auth/auth.guard';
import { RoleGuard } from 'src/app/shared/auth/role.guard';
import { NgxPaginationModule } from 'ngx-pagination';

const routes = [
  {
    path: 'admin/counter',
    component: CounterAdminComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      breadCum: 'admin / counter',
      role: 'Admin Counter',
    },
  },
  {
    path: 'admin/counter/add',
    component: AddCounterComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      breadCum: 'admin / counter / add counter',
      role: 'Admin Counter',
    },
  },
  {
    path: 'admin/counter/edit',
    component: EditCounterComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      breadCum: 'admin / counter / edit counter',
      role: 'Admin Counter',
    },
  },
  {
    path: 'admin/counter/report',
    component: ReportCounterComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      breadCum: 'admin / counter / report counter',
      role: 'Admin Counter',
    },
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
    NgxPaginationModule,
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    ContentModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
  ],
  exports: [
    CounterAdminComponent,
    AddCounterComponent,
    EditCounterComponent,
    ReportCounterComponent,
  ],
})
export class CounterAdminModule {}
