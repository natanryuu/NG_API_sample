import { Component, ViewChild } from '@angular/core';
import { TagButtonComponent } from '../tag-button/tag-button.component';
import { TagListComponent } from '../tag-list/tag-list.component';
import { DemoContent1Component } from "../demo-content1/demo-content1.component";

@Component({
  selector: 'uuu-home',
  standalone: true,
  imports: [TagButtonComponent, TagListComponent, DemoContent1Component],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {
  ondelete(tag: string) {
    alert(`delete ${tag}`);
  }


  tags: string[] = [];
  onChange(tags: string[]) {
    this.tags = tags;    
  }

  @ViewChild(DemoContent1Component) demo1!: DemoContent1Component;
  changeColor() {
    this.demo1.ChangeColor();
  }


}
