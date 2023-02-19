import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorComponent } from './components/visitor/visitor.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContentModule } from 'src/app/shared/content/content.module';

const routes = [
  {
    path: 'visitor',
    component: VisitorComponent,
    data: {
      breadCum: 'visitor',
    },
  },
];

@NgModule({
  declarations: [VisitorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    ContentModule,
  ],
})
export class VisitorModule {}
