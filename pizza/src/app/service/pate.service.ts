import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pate } from '../model/pate';
import { Observable } from 'rxjs';
import { SERVER } from '../config';

@Injectable({
  providedIn: 'root',
})
export class PateService {
  url = SERVER + '/api/pate';

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Pate[]> {
    return this.httpClient.get<Pate[]>(this.url);
  }

  public create(pate: Pate): Observable<Pate> {
    return this.httpClient.post<Pate>(this.url, pate);
  }

  public delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }
}
