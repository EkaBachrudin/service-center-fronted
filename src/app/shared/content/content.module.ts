import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './components/content/content.component';
import { SideBarModule } from '../side-bar/side-bar.module';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [ContentComponent, LoadingComponent],
  exports: [ContentComponent, LoadingComponent],
  imports: [CommonModule, SideBarModule],
})
export class ContentModule {}
