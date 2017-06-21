import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { NewBooksComponent } from './new-books/new-books.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NewBooksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
