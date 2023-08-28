import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { IdentityService } from './identity.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private _identityService: IdentityService, private _router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (this._identityService.isAuthenticated()) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${this._identityService.getToken('token')}` }
      })
    } else {
      this._router.navigate(["login"]);
    }
    return next.handle(request);
  }
}
