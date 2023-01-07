import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterUserComponent } from './components/counter-user/counter-user.component';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ContentModule} from "../../../shared/content/content.module";



const routes = [
  {
    path: 'user/counter',
    component: CounterUserComponent,
  },
];

@NgModule({
  declarations: [
    CounterUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    ContentModule,
  ]
})
export class CounterUserModule { }
