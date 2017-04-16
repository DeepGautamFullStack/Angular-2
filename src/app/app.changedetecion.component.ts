import {Component,ChangeDetectionStrategy} from "@angular/core";
import {Person} from "./app.person.model";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector:'changedetecion',
    template:`<h2>First Name:</h2> <h3>{{person.firstName}} </h3> <hr> <h2>Last Name:</h2> <h3>{{person.lastName}} </h3> <hr> 
    <button type='button' (click)='OnChangePersonName()'>Change Person Name</button>
    <button type='button' (click)='OnChangePersonObject()'>Change Person Object</button>`

})
export class AppChangeDetecionComponent{
   
person =new Person("Deep","Gautam")

OnChangePersonName():void
    {
        this.person.firstName="Angular 2 with";
        this.person.lastName="Deep Gautam";

    }

    OnChangePersonObject():void
    {
        this.person =new Person("Deep","Gautam -work on excpetion which you are able to see on console.");


    }
    



}