import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { SharebooksModule } from './new-books/sharebooks.module';
import { ServiceComponent } from './service/service.component';
import { NewBooksComponent } from './new-books/new-books.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ServiceComponent,
    NewBooksComponent
  ],
  imports: [
    BrowserModule,
    SharebooksModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
