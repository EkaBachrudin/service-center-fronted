import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthModule} from "./auth/auth.module";
import {CounterModule} from "./counter/counter.module";
import {SideBarModule} from "./shared/side-bar/side-bar.module";
import {ContentModule} from "./shared/content/content.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SideBarModule,
    ContentModule,
    AuthModule,
    CounterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
