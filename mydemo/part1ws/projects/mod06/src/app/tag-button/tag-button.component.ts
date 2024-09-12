import { booleanAttribute, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tagButton',
  standalone: true,
  imports: [],
  template: `
<!-- 使用 svg 產生紅色叉叉 -->
<div  style="width: auto; background-color: beige; border-radius: 10px; padding: 6px; margin: 2px;">
      <label  >{{ tagName }}</label> 
      @if (canDelete) {

  <!--<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
(click)="onDelete()" >
 <path fill="#FF0000" d="M14.707 1.293a1 1 0 0 0-1.414 0L8 6.586 2.707 1.293a1 1 0 0 0-1.414 1.414L6.586 8l-5.293 5.293a1 1 0 1 0 1.414 1.414L8 9.414l5.293 5.293a1 1 0 0 0 1.414-1.414L9.414 8l5.293-5.293a1 1 0 0 0 0-1.414z"/>

</svg> -->
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
          (click)="onDelete()" >
          <path fill="red" d="M14.142 14.142c.781.781.781 2.047 0 2.828-.39.39-.902.586-1.414.586s-1.024-.195-1.414-.586L10 16.414l-1.414 1.414c-.781.781-2.047.781-2.828 0-.781-.781-.781-2.047 0-2.828L7.586 14l-1.414-1.414c-.781-.781-.781-2.047 0-2.828.781-.781 2.047-.781 2.828 0L10 11.586l1.414-1.414c.781-.781 2.047-.781 2.828 0 .781.781.781 2.047 0 2.828L12.414 14l1.414 1.414z"/>
        </svg>

}
    </div>

`,
  styles: ``
})
export class TagButtonComponent {
  @Input({ required: true, alias: 'tag' }) tagName: string = "";
  @Input({ transform: booleanAttribute }) canDelete: boolean = false;
  @Output() delete = new EventEmitter<string>();
  onDelete() {
    this.delete.emit(this.tagName)
  }

}
