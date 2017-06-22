import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { SharebooksModule } from './new-books/sharebooks.module';
import { ServiceComponent } from './service/service.component';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    SharebooksModule,
    HttpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
