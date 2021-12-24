import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { filter, switchMap, tap, toArray } from 'rxjs/operators';
import { BehaviorSubject, from } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  private searchItem$: BehaviorSubject<string> = new BehaviorSubject('');

  public albums$ = this.searchItem$.pipe(
    switchMap(word => this.dataService.getAlbums().pipe(
      switchMap(albums => albums),
      filter(album => album.title.toLowerCase().includes(word.toLowerCase())),
      toArray()
    ))
  );

  public onSearchChange(event: any) {
    console.log(event.target.value);
    this.searchItem$.next(event.target.value);
  }

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}
