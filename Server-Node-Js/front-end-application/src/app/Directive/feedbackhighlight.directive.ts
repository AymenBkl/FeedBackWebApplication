import { Directive,ElementRef,Renderer2,HostListener } from '@angular/core';


@Directive({
  selector: '[appFeedbackhighlight]'
})
export class FeedbackhighlightDirective {



  constructor(private elementRef : ElementRef,
    private renderer : Renderer2) { }


  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.elementRef.nativeElement, 'highlight');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.elementRef.nativeElement, 'highlight');
}

}
