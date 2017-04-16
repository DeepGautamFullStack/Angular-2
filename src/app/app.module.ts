import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import { AppComponent }  from './app.component';
import {ChildComponent} from './app.child.component';
import {AppFirstCompoent} from './app.first.component';
import {AppChangeDetecionComponent} from './app.changedetecion.component';
import {AppDateTimeCompoent} from './app.datetime.component';
import {RegistrationFormComponent} from './registration-from.component';
import {AppInputChildComponent} from './app.inputchild.component';
import {AppParentComponent} from './app.parent.component';




@NgModule({
  imports:      [ BrowserModule,HttpModule,FormsModule ],
  declarations: [ AppComponent,ChildComponent,AppFirstCompoent,AppChangeDetecionComponent,AppDateTimeCompoent,RegistrationFormComponent,AppInputChildComponent,AppParentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
