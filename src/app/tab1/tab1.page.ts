import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor() {}
    a: number = 0;
    b: number = 0;
    c: number = 0;
    product: number = 1;
  
    calculateProduct(): void {
      this.product = 1;
      if (this.a > 10 && this.a < 15) {
        this.product *= this.a;
      }
      if (this.b > 10 && this.b < 15) {
        this.product *= this.b;
      }
      if (this.c > 10 && this.c < 15) {
        this.product *= this.c;
      }
    }
  }
