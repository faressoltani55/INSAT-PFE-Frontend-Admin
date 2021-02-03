import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BASE_URL} from "./CONSTS";
import {Professor} from "../utils/models/Professor";
import { Observable } from 'rxjs';
import { Utils } from '../utils/utils';


@Injectable({
  providedIn: 'root'
})
export class ProfessorService {


  constructor(private http: HttpClient) { }

 

  getProfessorByDepartment(arg0: string) : Observable<Professor[]> {
    return this.http.get(Utils.baseUrl + '/professors' ) as Observable<Professor[]>;
  }

  



}
