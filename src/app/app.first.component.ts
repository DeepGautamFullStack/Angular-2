import {Component} from "@angular/core";

@Component(
    {
        selector:"my-firstcomponet",
        template:"<h1> Hello Guys, I am able to create my first compoent in angualr 2. {{name}}</h1>"

    }
)
export class AppFirstCompoent
{
name:string="Resolution of EXCEPTION: Expression has changed after it was checked.";
}
