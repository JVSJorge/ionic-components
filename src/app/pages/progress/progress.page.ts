import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {
  public percentage = 0;
  public onRangeChange(event: any) {
    this.percentage = event.detail?.value?.upper / 100;
  }
  constructor() { }
  ngOnInit() {
  }

}
