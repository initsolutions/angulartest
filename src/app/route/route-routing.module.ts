import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { ServiceComponent }  from './../service/service.component';
import { UsersComponent }  from './../users/users.component';

const routes: Routes = [
   { path: 'service', component: ServiceComponent },
   { path: 'user', component: UsersComponent },
    { path: '**', redirectTo: 'service' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
