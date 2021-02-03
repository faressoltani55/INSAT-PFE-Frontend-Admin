import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utils} from '../utils/utils';
import {Soutenance} from '../utils/models/Soutenance';

@Injectable({
  providedIn: 'root'
})
export class SoutenancesService {


  constructor(private http: HttpClient) { }

  public getAllSoutenances(): Observable<Soutenance[]> {
    return this.http.get(Utils.baseUrl + '/soutenances' ) as Observable<Soutenance[]>;
  }


  public getSoutenanceById(id: string): Observable<Soutenance> {
    return this.http.get(Utils.baseUrl + '/soutenances/' + id ) as Observable<Soutenance>;
  }
}
