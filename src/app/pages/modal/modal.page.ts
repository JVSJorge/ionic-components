import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage {

  public async onShowModal() {
    const modal = await this.modalController.create({
      component: ModalInfoPage,
      componentProps: {
        name: 'JVS',
        country: 'Costa Rica'
      }
    });
    await modal.present();
    const resp = await modal.onDidDismiss();
    console.log('resp', resp);
  }

  constructor(private modalController: ModalController) { }

}
