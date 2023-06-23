import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AnonymousGuardService {
  constructor(private authSrv: AuthService, private router: Router) {}

  canActivate(): boolean | UrlTree {
    return !this.authSrv.isAuthenticated();
  }
}
