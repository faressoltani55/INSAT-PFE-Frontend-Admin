import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import {Utils} from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  public getDepartments(): Observable<any[]> {
    return this.http.get(Utils.baseUrl + '/departments' ) as Observable<any[]>;
  }

}
