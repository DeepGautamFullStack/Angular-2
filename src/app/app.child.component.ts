import {Component} from "@angular/core";

@Component(
    {
        selector:'childcomponent',
        template:'<h1>Hello {{name}} from child component testing</h1>'
        
    }
)
export class ChildComponent
{
    name:string="Deep";
}