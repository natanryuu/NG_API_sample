import { Component } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [],
  template: `
    <p>
      page1 works!
    </p>

    <h1> {{s1.a}} </h1>
    <button (click)="Display()">
      Display()
    </button>
    {{result}}

  `,
  styles: ``,
  providers:[
    Service1Service
  ]

})
export class Page1Component {
  constructor(public s1: Service1Service) {
    s1.a = "data1";
    console.log("page1 constructor", s1.a);
  }
  result = "";
  Display() {
    this.result = "form page1: " + this.s1.a;
  }
  ngOnInit(){ console.log("page1 ngOnInit", this.s1.a);}

}
