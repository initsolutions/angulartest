import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html'
})
@Injectable()
export class UserlistComponent implements OnInit {

  constructor () {}

   userlist:object = [{"firstname":"gob",
   "lastname":"bluch",
   "address":"Delhi",
   "Designation":"Software Developer"
   },
   {"firstname":"John",
   "lastname":"Doe",
   "address":"Mumbai",
   "Designation":"Software Engineer"
   },
   {"firstname":"eve",
   "lastname":"Holt",
   "address":"Nasik",
   "Designation":"Software Engineer"
   },
   {"firstname":"tracey",
   "lastname":"Holt",
   "address":"Mumbai",
   "Designation":"Software Engineer"
   }
   ]
 
  ngOnInit() {
  }

}
