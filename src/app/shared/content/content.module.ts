import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './components/content/content.component';
import {SideBarModule} from "../side-bar/side-bar.module";



@NgModule({
  declarations: [
    ContentComponent
  ],
  exports: [
    ContentComponent
  ],
  imports: [
    CommonModule,
    SideBarModule
  ]
})
export class ContentModule { }
