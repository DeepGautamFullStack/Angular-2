import {Component, Input, Output, EventEmitter} from "@angular/core";


@Component({
    selector:'parentreciever',
    template:`<h3>This intial value of name is coming from child component as in form of input:</h3>

    <input type="text" [value]="nameParent">

    <button (click)="changetoAtul()">
        Change Name to Atul
      </button> 
     `,
      styles: [`
    .counter {
      position: relative;
    }
    input {
      border: 0;
      border-radius: 4px;
      height: 30px;
      max-width: 150px;
      text-align: center;
    }
    button {
      outline: 0;
      cursor: pointer;
      height: 30px;
      border: 0;
      border-radius: 3px;
      background: #4CAF50;
      color: white;
    }
  `],


})
export class AppParentComponent{
    @Input()
    nameParent:string="";
    @Output()
    parentEvent: EventEmitter<string>=new EventEmitter();


changetoAtul()
{
    this.nameParent="Atul"

    this.parentEvent.emit("You changed name to :"+this.nameParent)
}


}