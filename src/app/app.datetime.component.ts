import {Component} from "@angular/core";
import {DateTimeHttpService} from "./app.callwebapi.services";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Component(
    {
        selector:"datetime",
        template:`<h1> Hello Guys , Here I am consuming the 
        http service (http://date.jsontest.com/) to get the date and time from http services.
        <hr>
         <button type='button' (click)='CallHttpService()'>Call  Http Service to get date time</button>
        </h1>
        <h2>Date is {{currentDate}} and time is {{currentTime}}
        `
        ,
        providers:[DateTimeHttpService]

    }
)
export class AppDateTimeCompoent
{
private currentDate:any;
private currentTime:any;
    constructor(private _datetimeservice:DateTimeHttpService ){
        this._datetimeservice=_datetimeservice;
    }
CallHttpService():void
    {
       this.currentDate=this._datetimeservice.getDateTime()
       .subscribe(p => this.currentDate = p.date,p=>this.currentTime=p.time);

       this.currentTime=this._datetimeservice.getDateTime()
       .subscribe(p=>this.currentTime=p.time);

    }
}