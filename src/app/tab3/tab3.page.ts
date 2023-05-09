import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  a: number = 0;
  b: number = 0;
  product: number = 1;
  constructor() {}
  calculateProduct(): void {
    this.product = 1;
    for (let i: number = this.a; i <= this.b; i++) {
      if (i % 6 === 0) {
        this.product *= i;
      }
    }
  }
}
