import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {Year} from '../models/year.model';
import {Session} from '../models/session.model';
import {Soutenance} from '../models/soutenance.model';

@Injectable({
  providedIn: 'root'
})
export class YearService {

  constructor(private http: HttpClient) { }

  getYears(): Observable<any> {
    return this.http.get(`${environment.apiBase}/years`);
  }

  getYearById(yearId: string): Observable<any> {
    return this.http.get(`${environment.apiBase}/years/${yearId}`);
  }

  postYear(year: Year): Observable<any> {
    return this.http.post(`${environment.apiBase}/years`, year);
  }

  getSessions(): Observable<any> {
    return this.http.get(`${environment.apiBase}/sessions`);
  }

  getSoutenances(): Observable<any> {
    return this.http.get(`${environment.apiBase}/soutenances`);
  }

  postSoutenance(soutenance: Soutenance): Observable<any> {
    return this.http.post(`${environment.apiBase}/soutenances`, soutenance);
  }

  postSession(session: Session): Observable<any> {
    return this.http.post(`${environment.apiBase}/sessions`, session);
  }

  getMajors(): Observable<any> {
    return this.http.get(`${environment.apiBase}/majors`);
  }

}
