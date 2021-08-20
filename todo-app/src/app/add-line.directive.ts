import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAddLine]'
})
export class AddLineDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {



  }
  @HostListener('click') onMouseClick() {
    if (this.el.nativeElement.style.textDecoration != 'line-through')
      this.decoration('line-through');
    else
      this.decoration('none');

  }
  @HostListener('mouseenter') onMouseEnter(){

    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');

  }

  decoration(style: string) {

    this.renderer.setStyle(this.el.nativeElement, 'text-decoration', style);

  }

}
