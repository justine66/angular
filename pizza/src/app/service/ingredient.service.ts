import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from '../model/ingredient';
import { SERVER } from '../config';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  private url = SERVER + '/api/ingredient';

  constructor(private httpClient: HttpClient) {}

  public getAllIngredient(): Observable<Ingredient[]> {
    return this.httpClient.get<Ingredient[]>(this.url);
  }

  public create(ingredient: Ingredient): Observable<Ingredient> {
    return this.httpClient.post(this.url, ingredient);
  }

  public delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }
}
