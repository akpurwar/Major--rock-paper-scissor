import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _http: HttpClient) { }

  getNews(): Observable<any[]> {
    console.log(this._http.get<any[]>('http://newsapi.org/v2/top-headlines?country=in&apiKey=20da05e8959f406b92c08421f88aefec'));

    return this._http.get<any[]>('http://newsapi.org/v2/top-headlines?country=in&apiKey=20da05e8959f406b92c08421f88aefec');
  }
}
