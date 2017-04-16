import {Component} from "@angular/core";


@Component({
    selector:'inputchild',
    template:` <div class="normalDiv">
    <parentreciever [nameParent]="nameChild" (parentEvent)="handleParentEvent($event)" ></parentreciever>

  <h2>This section is part of child component:
    Value of Name recieved from parent to child component 
    is: {{ outcome }}
  </h2>
    </div>
    `,
     styles: [`
    .normalDiv {
      display: block;
      text-align: center;
      padding: 25px;
      background: #f5f5f5;
    }
  `],
})

export class AppInputChildComponent{

nameChild="Deep";
outcome:any;

handleParentEvent(args:any)
{

  this.outcome=args;
 alert("I am alert from child component. My resposibilty is to handle parent component event and the I received : "+ args + "  from parent ");
}

}