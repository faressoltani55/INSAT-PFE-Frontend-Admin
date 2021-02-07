import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BASE_URL} from "./CONSTS";
import {Student} from "../utils/models/Student";
import {Observable} from 'rxjs';
import {Soutenance} from '../utils/models/Soutenance';
import {Utils} from '../utils/utils';

const URI = "students/"
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  public getStudentById(id: string): Observable<Student> {
    return this.http.get(Utils.baseUrl + '/students/' + id ) as Observable<Student>;
  }

  public updateStudent(id, body): Observable<Student> {
    return this.http.put(Utils.baseUrl + '/students/' + id, body ) as Observable<Student>;
  }


  get() {
    return this.http.get<Student[]>(BASE_URL + URI);
  }

  add(Student: Student) {
    return this.http.post<Student>(BASE_URL + URI, Student);
  }

  addMany(Students: Student[]) {
    return this.http.post<Student[]>(BASE_URL + URI + "all", Students);
  }


  update(Student) {
    return this.http.put<Student>(BASE_URL + URI + Student._id, Student);
  }

  delete(id: string) {
    return this.http.delete(BASE_URL + URI + id);
  }
}
