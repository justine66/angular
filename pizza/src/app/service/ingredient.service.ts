import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  private url = 'http://localhost:8080/api/ingredient';

  constructor(private httpClient: HttpClient) {}

  public getAllIngredient(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url);
  }
}
