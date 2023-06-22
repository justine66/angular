import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authSrv: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.authSrv.isAuthenticated()) {
      request = request.clone({
        headers: request.headers.append(
          'Authorization',
          `Bearer ${sessionStorage.getItem('token')}`
        ),
      });
    }
    return next.handle(request);
  }
}
