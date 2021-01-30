import { Injectable } from '@angular/core';
import {Utils} from '../utils/utils';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Subject} from '../utils/models/Subject';
import { SubjectStatus } from '../utils/enums/subject-status';

@Injectable({
  providedIn: 'root'
})
export class SujetsService {

  constructor(private http: HttpClient) { }

  public getAllSujets(): Observable<Subject[]> {
    return this.http.get(Utils.baseUrl + '/pfe' ) as Observable<Subject[]>;
  }

  public getSujetsByStatus(status: SubjectStatus): Observable<Subject[]> {
    return this.http.get(Utils.baseUrl + '/pfe?status=' + status ) as Observable<Subject[]>;
  }

  public getSujetById(id: string): Observable<Subject> {
    return this.http.get(Utils.baseUrl + '/pfe/' + id ) as Observable<Subject>;
  }

  public updateSujetStatus(id: string, status: SubjectStatus): Observable<SubjectStatus> {
    return this.http.patch(Utils.baseUrl + '/pfe/' + id, {status: status}) as Observable<SubjectStatus>;
  }

  public updateSujetAdministrationNotice(id: string, notice: string) {
    return this.http.patch(Utils.baseUrl + '/pfe/' + id + '/notice', {administrationNotice: notice});
  }
}
