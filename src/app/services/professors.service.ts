import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utils} from '../utils/utils';
import {Professor} from '../utils/models/Professor';
import { DepartmentEnum } from '../utils/enums/Department';
import { BASE_URL } from './CONSTS';

const URI = "professors/"

@Injectable({
  providedIn: 'root'
})
export class ProfessorsService {

  constructor(private http: HttpClient) { }

  public getAllProfessors(): Observable<Professor[]> {
    return this.http.get(Utils.baseUrl + '/professors' ) as Observable<Professor[]>;
  }

  public getProfessorsByDepartment(department: DepartmentEnum) : Observable<Professor[]> {
    return this.http.get(Utils.baseUrl + '/professors/department/' + department ) as Observable<Professor[]>;
  }

  add(professor: Professor) {
    return this.http.post<Professor>(BASE_URL+URI, professor)
  }

  addMany(professors: Professor[]) {
    return this.http.post<Professor[]>(BASE_URL+URI+"all", professors)
  }


  update(professor) {
    return this.http.put<Professor>(BASE_URL+URI+professor._id, professor)
  }

  delete(id: string) {
    return this.http.delete(BASE_URL+URI+id)
  }

  get() {
    return this.http.get<Professor[]>(BASE_URL+URI)
  }
}
