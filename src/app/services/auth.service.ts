import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginPath = `${environment.apiUrl}login`
  private _registerPath = `${environment.apiUrl}register`

  constructor(private _client: HttpClient) { }

  // login(data): Observable<any> {
  //   return this._client.post(this._loginPath, data);
  // }
  
  // register(data): Observable<any> {
  //   return this._client.post(this._registerPath, data);
  // }
}
