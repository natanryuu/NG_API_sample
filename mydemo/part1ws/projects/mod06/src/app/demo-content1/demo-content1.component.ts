import { Component, ContentChild, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo-content1',
  standalone: true,
  imports: [],
  template: `
<!-- 使用 div 產生強制行浮動視窗，div 的 style要置中淺灰色背景、灰色框線、內距20px。 -->
<div #box style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: lightgray; border: 2px solid gray; padding: 20px;"> 
<h2>Demo Content 1</h2>
      <hr/>
      <div>
        <ng-content></ng-content>  
      </div>
      <div style="border: 2px solid gray;">
        select:
        <ng-content select="[tips]"></ng-content>  
      </div>   
    
    </div>


  `,
  styles: ``
})
export class DemoContent1Component {
  @ContentChild('antherTips') antherTips: HTMLElement|any;
  ngAfterContentInit() {
    console.log('ngAfterContentInit', this.antherTips);
    this.antherTips.nativeElement.addEventListener('mousemove', () => {
      this.antherTips.nativeElement.style.backgroundColor = 'yellow';

    });

    this.antherTips.nativeElement.addEventListener('mouseleave', () => {     
      this.antherTips.nativeElement.style.backgroundColor = '';
    });

  }

  @ViewChild('box') box: HTMLElement|any;
  ChangeColor() {
    this.box.nativeElement.style.backgroundColor = 'lightblue';
    this.box.nativeElement.style.color = 'blue';
  }


}
