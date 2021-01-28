import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BASE_URL} from "./CONSTS";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  getDepartments() {
    return this.http.get(BASE_URL+"")
  }
}
