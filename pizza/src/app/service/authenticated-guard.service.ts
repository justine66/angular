import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatedGuardService {
  constructor(private authSrv: AuthService, private router: Router) {}

  canActivate(): boolean | UrlTree {
    if (this.authSrv.isAuthenticated()) {
      return true;
    }
    return this.router.createUrlTree(['/login']);
  }
}
