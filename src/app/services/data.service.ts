import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

public getUsers() {
  return this.http.get('https://jsonplaceholder.typicode.com/users');
}

  constructor(private http: HttpClient) { }
}
