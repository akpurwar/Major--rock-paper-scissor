import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private _http: HttpClient) { }

  getGames(): Observable<any[]> {
    return this._http.get<any[]>('http://localhost:4000/game');
  }
}
