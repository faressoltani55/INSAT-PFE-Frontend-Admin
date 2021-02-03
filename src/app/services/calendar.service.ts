import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Utils} from '../utils/utils';
import {HttpClient} from '@angular/common/http';
import {Soutenance} from '../utils/models/Soutenance';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private http: HttpClient) { }

  public getSoutenances(): Observable<Soutenance> {
    return this.http.get(Utils.baseUrl + '/soutenances') as Observable<Soutenance>;
  }
}
