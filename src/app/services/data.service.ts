import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Album, ListComponent } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  public getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }

  public getMenuOpts(): Observable<ListComponent[]> {
    return this.http.get<ListComponent[]>('assets/data/menu-options.json');
  }

  public getHeroes(): Observable<any[]> {
    return this.http.get<any[]>('assets/data/superheroes.json').pipe(
      delay(2000)
    );
  }

  constructor(private http: HttpClient) { }
}
