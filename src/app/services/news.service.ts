/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {


  constructor(private _http: HttpClient) { }

  newsApiUrl = 'https://newsapi.org/v2/top-headlines?country=eg&apiKey=1e51c112ccef41e78c4b3d420d3f9a49';

  topHeading(): Observable<any>{
    return this._http.get(this.newsApiUrl);
  }
}
