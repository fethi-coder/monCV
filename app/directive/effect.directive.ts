import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appEffect]'
})
export class EffectDirective implements OnInit {


  constructor() { }
  @HostBinding('style.transform')
  transform!: string;

  @HostListener('click') onClick() {
    this.transform = 'scale(1.5,1.5)';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.transform = 'scale(1)';
  }


  ngOnInit() { }
}

