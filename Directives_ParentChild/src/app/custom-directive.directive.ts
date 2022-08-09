import { Directive , ElementRef, HostListener, OnInit, Renderer2, TemplateRef} from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective implements OnInit {

  constructor(private ele: ElementRef , private renderer:Renderer2) {
   }

   ngOnInit(): void {
   }

   @HostListener('keydown') onmouse(event:Event){
     this.renderer.setStyle(this.ele.nativeElement,'background-color','green')
   }

   @HostListener('click') onmouseenter(event:Event){
    this.renderer.setStyle(this.ele.nativeElement,'background-color','red')
  }



}
