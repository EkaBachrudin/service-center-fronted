import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterUserComponent } from './components/counter-user/counter-user.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContentModule } from '../../../shared/content/content.module';
import { ControlCounterComponent } from './components/control-counter/control-counter.component';
import { AuthGuard } from 'src/app/shared/auth/auth.guard';

const routes = [
  {
    path: 'user/counter',
    component: CounterUserComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'user/counter/control',
    component: ControlCounterComponent,
    canActivate: [AuthGuard],
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
