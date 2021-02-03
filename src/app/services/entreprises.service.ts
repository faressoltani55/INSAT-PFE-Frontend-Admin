import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utils} from '../utils/utils';
import {Entreprise} from '../utils/models/Entreprise';

@Injectable({
  providedIn: 'root'
})
export class EntreprisesService {

  constructor(private http: HttpClient) { }

  public getAllEntreprises(): Observable<Entreprise[]> {
    return this.http.get(Utils.baseUrl + '/entreprise' ) as Observable<Entreprise[]>;
  }


  public getEntrepriseById(id: string): Observable<Entreprise> {
    return this.http.get(Utils.baseUrl + '/entreprise/' + id ) as Observable<Entreprise>;
  }
}
