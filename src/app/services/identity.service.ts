import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Registration {
  userName: string
  email: string
  password: string
}

export interface Authentication {
  email: string
  password: string
  token: string
}

@Injectable({
  providedIn: 'root'
})
export class IdentityService {
  private _loginPath = `${environment.apiUrl}/Identity/Login`
  private _registerPath = `${environment.apiUrl}/Identity/Register`

  constructor(private _client: HttpClient) { }

  passLogin() {
    return this._client.get("https://localhost:7168/Home")
  }

  isAuthenticated() {
    return this.getToken('token') ? true : false
  }

  login(data: Authentication): Observable<Authentication> {
    return this._client.post<Authentication>(this._loginPath, data);
  }

  register(data: Registration): Observable<Registration> {
    return this._client.post<Registration>(this._registerPath, data);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(key: string) {
    return localStorage.getItem(key);
  }

  removeToken(key: string) {
    localStorage.removeItem(key);
  }
}
