import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string = 'http://localhost:8080/api/utilisateur';

  constructor(private httpClient: HttpClient, private router: Router) {}

  public loginUsed(username: string): Observable<boolean> {
    return this.httpClient.get<boolean>(`${this.url}/check/${username}`);
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
