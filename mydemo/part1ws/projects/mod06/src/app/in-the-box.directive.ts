import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[InTheBox]',
  standalone: true
})
export class InTheBoxDirective {

  constructor(private el: ElementRef) {
    // this.putInTheBox("solid 2px red");

  }
  private putInTheBox(borderStyle: string) {
    this.el.nativeElement.style.border = borderStyle;
  }
  @Input('InTheBox') borderStyle: string = "";
  @HostListener("mouseenter") onMouseEnter() {
    this.putInTheBox(this.borderStyle);
  }
  @HostListener("mouseleave") onMouseLeave() {
    this.putInTheBox("none");
  }
  ngOnInit() {
    if (!this.borderStyle)
      this.borderStyle = "solid 2px red";
    
  }
}




