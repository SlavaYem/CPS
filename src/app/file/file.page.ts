import { Component, OnInit } from '@angular/core';
import {LoadingController} from '@ionic/angular';
@Component({
  selector: 'app-file',
  templateUrl: './file.page.html',
  styleUrls: ['./file.page.scss'],
})
// export class FilePage implements OnInit {
//   data:any = [];
//   data_users : any = [];
//   showDetails : boolean[] = new Array(1000).fill(false);
//   dataUrl = 'http://api.jsonbin.io/v3/b/63e23247c0e7653a05715c48';
//   loading :any;
//   max: number = 0;
//   min: number = 100;
//   constructor(public loadingController:LoadingController) 
//   {
  
//   }
//   async load()
//   {
//     this.loading = await this.loadingController.create({
//       spinner: "bubbles",
//       message: 'Loading...'
//     })
//     await this.loading.present();
//     fetch(this.dataUrl).then(res=>res.json())
//       .then(json =>{
//         this.data = json;
//         this.data = this.data.record;
//         let i = 0;
//         console.log(this.data[1]);
//         while (this.data[i] != undefined)
//         {
//           this.data_users.push(this.data[i][0]);

//         }
//         this.getMaxAge();
//         this.getMinAge();
//         this.loading.dismiss();
//       });
//   }
//   toggleDetails(i:number)
//   {
//     if (this.showDetails[i])
//     {
//       this.showDetails[i] = false;
//     }
//     else 
//     {
//       this.showDetails[i] = true;
//     }
//   }
//   getMaxAge()
//   {
//     this.max = 0;
//     for (let i = 0 ; i < this.data_users.length; i++)
//     {
//       if(this.max < this.data_users[i]["age"]) this.max = this.data_users[i]["age"]
//     }
//   }
//   getMinAge()
//   {
//     this.min = 100;
//     for (let i = 0 ; i < this.data_users.length; i++)
//     {
//       if(this.min < this.data_users[i]["mother"]["age"]) this.min = this.data_users[i]["mother"]["age"]
//     }
//   }
//   getGreenColor(a:number, b:number)
//   {
//     return a == b? 'green' : '';
//   }
//   getBlueColor(a:number, b:number)
//   {
//     return a == b? 'blue' : '';
//   }
//   getYes(b:boolean)
//   {
//     return b == true ? 'Одружений' : 'Вільний';
//   }
//   getDog(b:string)
//   {
//     return b == null ? 'Немає собаки' : 'Є собака' + b;
//   }
//   ngOnInit() {
//   }
// }
export class FilePage implements OnInit {
  data: any = [];
  data_students: any = [];
  showDetails: boolean[] = new Array(1000).fill(false);
  dataUrl = 'https://api.jsonbin.io/v3/b/645fea789d312622a35d97f1';
  loading: any;
  birthdateColors: any = {};

  constructor(public loadingController: LoadingController) {}

  async load() {
    this.loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: 'Loading...',
    });
    await this.loading.present();
    fetch(this.dataUrl)
      .then((res) => res.json())
      .then((json) => {
        this.data = json;
        this.data = this.data.record;
        let i = 0;
        while (this.data[i] !== undefined) {
          this.data_students.push(this.data[i]);
          const birthdate = this.data[i]['birthdate'];
          if (!this.birthdateColors[birthdate]) {
            this.birthdateColors[birthdate] = this.getRandomColor();
          }
          i++;
        }
        this.loading.dismiss();
      });
  }

  toggleDetails(i: number) {
    this.showDetails[i] = !this.showDetails[i];
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  ngOnInit() {}
}
