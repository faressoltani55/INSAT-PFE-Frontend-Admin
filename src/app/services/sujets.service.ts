import { Injectable } from '@angular/core';
import {Utils} from '../utils/utils';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Subject} from '../utils/models/Subject';

@Injectable({
  providedIn: 'root'
})
export class SujetsService {

  constructor(private http: HttpClient) { }

  public getAllSujets(): Observable<Subject[]> {
    return this.http.get(Utils.baseUrl + '/pfe' ) as Observable<Subject[]>;
  }
}
