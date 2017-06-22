import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ServiceComponent } from './service/service.component';
import { NewBooksComponent } from './new-books/new-books.component';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ServiceComponent,
    NewBooksComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
