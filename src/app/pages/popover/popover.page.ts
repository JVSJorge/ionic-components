import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from '../../components/popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  public async onClick(event: any) {
    const popover = await this.popoverController.create({
      component: PopoverInfoComponent,
      event,
      translucent: true,
      backdropDismiss: false
    });
    await popover.present();
    const { data } = await popover.onWillDismiss();
    console.log('close: ', data);
  }

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
  }

}
