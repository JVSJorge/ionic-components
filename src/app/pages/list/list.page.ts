import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild(IonList) ionList: IonList;
  public users$: Observable<any>;

  public share(user) {
    console.log('share', user);
    this.ionList.closeSlidingItems();
  }

  public favorite(user) {
    console.log('favorite', user);
    this.ionList.closeSlidingItems();
  }

  ngOnInit() {
    this.users$ = this.dataService.getUsers();
  }

  constructor(private dataService: DataService) { }
}
