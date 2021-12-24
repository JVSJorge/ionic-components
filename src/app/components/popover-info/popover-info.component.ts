import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {

  public onClick(value: number) {
    console.log('onClick: ', value);
    this.popoverController.dismiss({
      value
    });
  }

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {}

}
