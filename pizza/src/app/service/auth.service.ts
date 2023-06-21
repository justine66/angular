import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string = 'http://localhost:8080/api/utilisateur';

  constructor(private httpClient: HttpClient) {}

  public connexion(login: string, password: string): Observable<any> {
    let data = {
      username: login,
      password: password,
    };
    return this.httpClient.post(`${this.url}/connexion`, data);
  }
}
