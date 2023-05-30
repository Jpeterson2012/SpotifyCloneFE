import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private http: HttpClient) { }

  public getArtists(): Observable<any> {
    return this.http.get(environment.apiURL + 'artists');
  }
  public getAlbums(): Observable<any> {
    return this.http.get(environment.apiURL + 'albums');
  }


}
