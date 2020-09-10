import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') elementClass = false;

  @HostListener('document:click',['$event']) onClickDropdown(event) {
    this.elementClass = this.eRef.nativeElement.contains(event.target) ? !this.elementClass : false;
  }

  constructor(private eRef: ElementRef) {
  }
}
