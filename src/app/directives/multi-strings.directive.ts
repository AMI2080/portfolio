import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[multiStrings]'
})
export class MultiStringsDirective implements OnInit, OnDestroy {
  @Input('strings') strings: string[] = [];
  @Input('multiStrings') speed: number = 300;
  currentString = '';
  currentIndex = 0;
  currentPos = 0;
  duration = '+';

  interval = setInterval(() => { }, 1000);

  constructor(private elementRef: ElementRef) {

  }

  updateString() {
    if (this.strings.length === 0) {
      return;
    }
    if (this.duration === '+') {
      if (this.strings[this.currentIndex] === this.currentString) {
        this.duration = '-';
      } else {
        this.currentPos++
        this.currentString = this.strings[this.currentIndex].slice(0, this.currentPos);
      }
    }
    if (this.duration === '-') {
      if (this.currentString === '') {
        this.duration = '+';
        this.currentIndex = this.strings.length === (this.currentIndex + 1) ? 0 : this.currentIndex + 1;
      } else {
        this.currentPos--;
        this.currentString = this.strings[this.currentIndex].slice(0, this.currentPos);
      }
    }
    this.elementRef.nativeElement.innerText = this.currentString + '|';
  }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.updateString();
    }, this.speed)
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
