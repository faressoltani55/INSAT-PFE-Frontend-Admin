import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {Year} from '../models/year.model';
import {Session} from '../models/session.model';

@Injectable({
  providedIn: 'root'
})
export class YearService {

  constructor(private http: HttpClient) { }

  getYears(): Observable<any> {
    return this.http.get(`${environment.apiBase}/years`);
  }

  postYear(year: Year): Observable<any> {
    return this.http.post(`${environment.apiBase}/years`, year);
  }

  getSessions(): Observable<any> {
    return this.http.get(`${environment.apiBase}/sessions`);
  }

  postSession(session: Session): Observable<any> {
    return this.http.post(`${environment.apiBase}/sessions`, session);
  }

}
