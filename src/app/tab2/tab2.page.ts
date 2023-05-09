import { getLocaleDateFormat } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor() {}
  // arrayras(n:any)
  // {
  //   this.a = [];
  //   try{
  //     this.n = parseInt(n);
  //     if (isNaN(this.n) == true){
  //       throw new Error('Parametr is not a number!');
  //     }
  //     if(n<=0)
  //     {
  //       throw new Error('Parametr less than zero');
  //     }    
  //     let i: number = 0, j:number = 0;
  //     this.a = Array(this.n);
  //     console.log("Array created");
  //     for(i = 0; i < this.n ; i++)
  //     {
  //       this.a[i] = Array(this.n);
  //       for(j = 0; j < this.n ; j++)
  //       {
  //         let aa:number = Math.pow(-1, i) * (i + 2 *j) / 3 ;
  //         this.a[i][j] = parseFloat(aa.toFixed(2));
  //       }
  //     }
  //   }
  //   catch(error){
  //     console.log(error);
  //   }
  // }
  //   getColor(b:number)
  // {
  //   return b > 0 ? 'green' : 'red';
  // }
  // ngOnInit()
  // {

  // }
  n: number = 0;
  matrix: number[][] = [];

  generateMatrix(): void {
    this.matrix = [];
    for (let i = 0; i < this.n; i++) {
      this.matrix[i] = [];
      for (let j = 0; j < this.n; j++) {
        const randomNumber = Math.floor(Math.random() * 20) + 1; // Генеруємо випадкове число від 1 до 20
        this.matrix[i][j] = randomNumber;
      }
    }
  }

  isPositiveEven(number: number): boolean {
    return number > 0 && number % 2 === 0;
  }
}

