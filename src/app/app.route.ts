import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { ServiceComponent }  from './service/service.component';
import { NewBooksComponent } from './new-books/new-books.component';
import { UserlistComponent }  from './users/userlist.component';
import { UserdetailsComponent }  from './users/userdetails.component';

export const routes: Routes = [
    { path: 'service', component: ServiceComponent },
    { path: 'books', component: NewBooksComponent },
    { path: '**', redirectTo: 'userlist' },
    /*{ path: 'user', loadChildren: 'app/users/user.module#usersModule' }*/
  	{ path: 'user',
	  children: [
	    { path: '', redirectTo: 'list', pathMatch: "full"},
	    { path: 'userdetails',component: UserdetailsComponent },
	    { path: 'list',component: UserlistComponent }
	  ]
  	}
    
        
];

export const RouteRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
