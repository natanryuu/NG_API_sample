import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-content1',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './content1.component.html',
  styles: ``
})
export class Content1Component {
  myclass = "subTitle dark";
  isDark = true;
  isTitle = false;
  myColor="green";
  mySize="20px";
  myStyle={color:this.myColor, 'font-size':this.mySize};

}
