import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserCategorywiseService {

  constructor(private _http: HttpClient) { }

  getGK(): Observable<any[]> {
    console.log(this._http.get<any[]>('http://localhost:4000/quiz/gk'));

    return this._http.get<any[]>('http://localhost:4000/quiz/gk');
  }
  getLT(): Observable<any[]> {
    console.log(this._http.get<any[]>('http://localhost:4000/quiz/lt'));

    return this._http.get<any[]>('http://localhost:4000/quiz/lt');
  }
  getBT(): Observable<any[]> {
    console.log(this._http.get<any[]>('http://localhost:4000/quiz/bt'));

    return this._http.get<any[]>('http://localhost:4000/quiz/bt');
  }
}
