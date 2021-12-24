import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListComponent } from './interfaces/interfaces';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public componentList$: Observable<ListComponent[]>;
  ngOnInit(): void {
    this.componentList$ = this.dataService.getMenuOpts();
  }
  constructor(private dataService: DataService) {}
}
