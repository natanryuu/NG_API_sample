import { Component } from '@angular/core';

@Component({
  selector: 'app-content2',
  standalone: true,
  imports: [],
  templateUrl: './content2.component.html',
  styles: ``
})
export class Content2Component {
  eventValue: string = "";
  oninput(event: any) {
    this.eventValue = `你輸入: ${event.target.value}`;
  }
  canExit = false;
  onmousemove(event: any) {
    this.eventValue = `    
      現在位置 x:${event.offsetX} y:${event.offsetY} 
      target:${event.target.tagName} 
      currentTarget:${event.currentTarget.tagName}`;

    const centerX = 75;
    const centerY = 75;
    const targetRange = 10;

    if (Math.abs(event.offsetX - centerX) <= targetRange
      && Math.abs(event.offsetY - centerY) <= targetRange) {
      this.canExit = true;
      console.log("canExit");
    }

  }
  GoHome(event: any) {
    if (!this.canExit) {
      alert("必須正中靶心才能離開此頁面");
      event.preventDefault();
      //  event.stopPropagation();
      event.stopImmediatePropagation();
    }

    console.log(event.target.tagName);
    console.log(event.currentTarget.tagName);
  }
  onclick(event: any) {
    console.log(`onclick()你點擊了 ${event.target.tagName} 元素`);
  }

}
