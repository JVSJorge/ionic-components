import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {
  public loading: HTMLIonLoadingElement;

  public onShowLoading() {
    this.presentLoading();
    setTimeout(() => {
      this.loading.dismiss();
    }, 2000);
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Espere por favor...',
    });
    await this.loading.present();
  }

  constructor(private loadingController: LoadingController) { }

  ngOnInit() {
  }

}
