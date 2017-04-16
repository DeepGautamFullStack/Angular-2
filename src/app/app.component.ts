import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>{{name}} {{currentdatetime}}   By:Deep Gautam </h1> <h2>Todays topic is :{{topicOfToday}}</h2> <inputchild></inputchild> `,
})
export class AppComponent  {
private currentdatetime :any;
  constructor()
  {
    this.currentdatetime=new Date();
  }
  
   name = 'Angular 2 Tutorial'; 

   topicOfToday="@Input";
  
}
