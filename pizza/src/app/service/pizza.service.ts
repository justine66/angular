import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from '../model/pizza';
import { SERVER } from '../config';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  private url = SERVER + '/api/pizza';

  constructor(private httpClient: HttpClient) {}

  public getAllPizza(): Observable<Pizza[]> {
    return this.httpClient.get<Pizza[]>(this.url);
  }

  public delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }

  public create(pizza: Pizza): Observable<Pizza> {
    let ingredientsId: number[] = [];
    pizza.ingredients?.forEach((i) => ingredientsId.push(i.id!));
    //if(pizza.ingredients){
    //  for (let i of pizza.ingredients!) {
    //    ingredientsId.push(i.id!);
    //  }
    //}

    let pizzaRequest = {
      name: pizza.name,
      pateId: pizza.pate?.id,
      ingredientsIds: ingredientsId,
    };
    return this.httpClient.post<Pizza>(this.url, pizzaRequest);
  }
}
