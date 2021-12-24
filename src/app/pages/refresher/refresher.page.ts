import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  public array = [];

  public doRefresh(event) {
    setTimeout(() => {
      this.array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      event.target.complete();
    }, 2000);
  }

  constructor() { }

  ngOnInit() {
  }

}
