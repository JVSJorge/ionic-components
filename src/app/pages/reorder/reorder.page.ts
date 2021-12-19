import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.page.html',
  styleUrls: ['./reorder.page.scss'],
})
export class ReorderPage implements OnInit {

  public array = [1,2,3,4,5,6,7,8,9,10];

  public doReorder(event) {
    const itemMove = this.array.splice(event.detail.from, 1)[0];
    this.array.splice(event.detail.to, 0, itemMove);
    console.log('Reorder', this.array);
    event.detail.complete();
  }

  constructor() { }

  ngOnInit() {
  }

}
