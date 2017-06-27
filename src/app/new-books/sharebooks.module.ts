import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewBooksComponent } from './new-books.component';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [NewBooksComponent],
  exports: [NewBooksComponent]
})
export class SharebooksModule { }
