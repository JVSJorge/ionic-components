import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  public array = new Array(20);

  constructor() { }

  public loadData(event) {
    console.log('Event ->', event);
    setTimeout(() => {
      const newArray = new Array(20);
      this.array = [...this.array, ...newArray];
      this.infiniteScroll.complete();
      if(this.array.length >= 60) {
        this.infiniteScroll.disabled = true;
      }
    }, 2000);
  }
}
