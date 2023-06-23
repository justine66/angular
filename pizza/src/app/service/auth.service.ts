import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SERVER } from '../config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string = SERVER + '/api/utilisateur';

  constructor(private httpClient: HttpClient, private router: Router) {}

  public infos(): Observable<any> {
    return this.httpClient.get(`${this.url}/infos`);
  }

  public loginUsed(username: string): Observable<boolean> {
    return this.httpClient.get<boolean>(`${this.url}/check/${username}`);
  }

  public get username() {
    if (this.isAuthenticated()) {
      return JSON.parse(sessionStorage.getItem('user')!).username;
    }
  }

  public get admin(): boolean {
    if (this.isAuthenticated()) {
      return JSON.parse(sessionStorage.getItem('user')!).admin;
    }
    return false;
  }

  public isAuthenticated(): boolean {
    return sessionStorage.getItem('token') !== null;
  }

  public logout() {
    sessionStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

  public connexion(login: string, password: string): Observable<any> {
    let data = {
      username: login,
      password: password,
    };
    return this.httpClient.post(`${this.url}/connexion`, data);
  }

  public inscription(login: string, password: string): Observable<any> {
    let utilisateurAInscrire = {
      username: login,
      password: password,
    };
    return this.httpClient.post(
      `${this.url}/inscription`,
      utilisateurAInscrire
    );
  }
}
