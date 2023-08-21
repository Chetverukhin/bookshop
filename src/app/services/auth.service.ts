import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';

export interface Registration {
  userName: string
  email: string
  password: string
}

export interface Authentication {
  email: string
  password: string
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private _loginPath = `${environment.apiUrl}login`
  private _registerPath = `${environment.apiUrl}register`

  constructor(private _client: HttpClient) { }

  login(data: Authentication): Observable<Authentication> {
    return this._client.post<Authentication>(this._loginPath, data);
  }

  register(data: Registration): Observable<Registration> {
    return this._client.post<Registration>(this._registerPath, data);
  }
}
