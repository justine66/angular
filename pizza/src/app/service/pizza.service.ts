import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from '../model/pizza';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  private url = 'http://localhost:8080/api/pizza';

  constructor(private httpClient: HttpClient) {}

  public getAllPizza(): Observable<Pizza[]> {
    return this.httpClient.get<Pizza[]>(this.url);
  }

  public delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }
}
