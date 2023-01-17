import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterUserComponent } from './components/counter-user/counter-user.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContentModule } from '../../../shared/content/content.module';
import { ControlCounterComponent } from './components/control-counter/control-counter.component';
import { AuthGuard } from 'src/app/shared/auth/auth.guard';
import { RoleGuard } from 'src/app/shared/auth/role.guard';

const routes = [
  {
    path: 'user/counter',
    component: CounterUserComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      breadCum: 'user / counter',
      role: 'User Counter',
    },
  },
  {
    path: 'user/counter/control/:id',
    component: ControlCounterComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      breadCum: 'user / counter / control',
      role: 'User Counter',
    },
  },
];

@NgModule({
  declarations: [CounterUserComponent, ControlCounterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    ContentModule,
  ],
})
export class CounterUserModule {}
