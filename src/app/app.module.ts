import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CounterModule } from './counter/counter.module';
import { SideBarModule } from './shared/side-bar/side-bar.module';
import { ContentModule } from './shared/content/content.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './shared/auth/auth.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/auth/auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoleGuard } from './shared/auth/role.guard';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AuthModule,
    AppRoutingModule,
    SideBarModule,
    ContentModule,
    AuthModule,
    CounterModule,
    BrowserAnimationsModule,
  ],
  providers: [
    RoleGuard,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
