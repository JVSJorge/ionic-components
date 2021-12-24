import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListComponent } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit{

  public componentList$: Observable<ListComponent[]>;

  ngOnInit() {
    this.componentList$ = this.dataService.getMenuOpts();
  }

  constructor(private dataService: DataService) { }

}
