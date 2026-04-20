import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Series } from './series';

import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private apiUrl = environment.baseUrl + 'series.json';

  constructor(private http: HttpClient) { }

  getSeriesList(): Observable<Series[]> {
    return this.http.get<Series[]>(this.apiUrl);
  }
}