import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule, MdDialog, MdButton,MdCardModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouteRoutingModule }  from './../app.route';
import { FormsModule } from '@angular/forms';
import {MdButtonModule,MdInputModule, } from '@angular/material';
import {Component} from '@angular/core';

import 'hammerjs';
import { AppComponent } from './../app.component';
import { EmpDataComponent } from './emp-data.component';

@NgModule({
  declarations: [
    AppComponent,
   EmpDataComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    MaterialModule,
    FormsModule,
    MdCardModule,
    MdDialog,
    MdButton,  
    HttpModule,
    MdButtonModule,
    BrowserAnimationsModule,
    RouteRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class empDataModule { }
