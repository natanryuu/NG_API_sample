import { Component } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-page2',
  standalone: true,
  imports: [],
  template: `
    <p>
      page2 works!
    </p>
    <h1> {{s1.a}} </h1>
    <button (click)="Display()">
      Display()
    </button>
    {{result}}

  `,
  styles: ``
})
export class Page2Component {
  constructor(public s1: Service1Service) {
    s1.a = "data2";
    console.log("page2 constructor", s1.a);
  }
  result = "";
  Display() {
    this.result = "form page2: " + this.s1.a;
  }
  ngOnInit(){ console.log("page2 ngOnInit", this.s1.a);}

}
