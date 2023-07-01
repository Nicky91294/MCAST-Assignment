import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as _ from 'lodash';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!_.includes(request.url.toString(), 'auth/connect')){
      var token = localStorage.getItem(environment.tokenStorageKey) || '';
      const clonedReq = request.clone({
        headers: request.headers.set('authorization', token),
      });
      return next.handle(clonedReq);
    } else {
      return next.handle(request);
    }
  }
}
