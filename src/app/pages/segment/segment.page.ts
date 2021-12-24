import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  public filterBy$: BehaviorSubject<any> = new BehaviorSubject('all');

  public superheroes$ = this.filterBy$.pipe(
    switchMap(filterBy => this.dataService.getHeroes().pipe(
      switchMap(heroes => {
        if (filterBy === 'all') {
          return of(heroes);
        } else {
          return of(heroes.filter(hero => hero.publisher === filterBy));
        }
      })
    ))
  );

  public segmentChanged(event: any) {
    console.log('Segment changed', event.detail.value);
    this.filterBy$.next(event.detail.value);
  }

  ngOnInit() {
  }

  constructor(private dataService: DataService) { }
}
