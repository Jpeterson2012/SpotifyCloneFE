import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:8080/';

  public getArtists(): Observable<any> {
    return this.http.get(this.url + 'artists');
  }
}
