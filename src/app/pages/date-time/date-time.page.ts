import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {
  currentDate = new Date();
  customPikerOptions= {
    buttons: [
      {
        text: 'Hola',
        handler: (event) => {
          console.log('Clicked Hola!', event);
        }
      },
      {
        text: 'Mundo',
        handler: () => {
          console.log('Clicked Mundo!');
        }
      }
    ]
  };

  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];

  onChange(event) {
    console.log(event);
    console.log('Data Change to->', event.detail.value);
  }

  ngOnInit() {
  }

  constructor() { }
}
