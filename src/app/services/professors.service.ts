import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Subject} from '../utils/models/Subject';
import {Utils} from '../utils/utils';
import {Professor} from '../utils/models/Professor';

@Injectable({
  providedIn: 'root'
})
export class ProfessorsService {

  constructor(private http: HttpClient) { }

  public getAllProfessors(): Observable<Professor[]> {
    return this.http.get(Utils.baseUrl + '/professors' ) as Observable<Professor[]>;
  }

}
