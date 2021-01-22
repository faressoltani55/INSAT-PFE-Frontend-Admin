import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Utils} from '../utils/utils';
import {HttpClient} from '@angular/common/http';
import {Admin} from '../utils/models/Admin';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public login(username: string, password: string): Observable<LoginResponse> {
    return this.http.post(Utils.baseUrl + '/auth', {
      username: username,
      password: password,
    }, ) as Observable<LoginResponse>;
  }

  public getUser(): Observable<Admin> {
    return this.http.get(Utils.baseUrl + '/admin') as Observable<Admin>;
  }


}

class LoginResponse {
  public token: string;
  public refresh: string;
}

