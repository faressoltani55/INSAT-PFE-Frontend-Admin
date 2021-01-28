import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BASE_URL} from "./CONSTS";
import {Professor} from "../utils/models/Professor";

const URI = "professors/"

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Professor[]>(BASE_URL+URI)
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

}
