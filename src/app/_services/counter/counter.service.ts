import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CounterInterface } from 'src/app/_type/counter/counter.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  constructor(private http: HttpClient) {}

  get(params: any) {
    return this.http.get<CounterInterface[]>(
      environment.baseUrl + '/counters',
      {
        params,
      }
    );
  }

  getById(id: number) {
    return this.http.get<CounterInterface[]>(
      environment.baseUrl + '/counter/' + id
    );
  }

  create(payload: any) {
    return this.http.post<any>(environment.baseUrl + '/counter', payload);
  }

  update(payload: any) {
    console.log('SERVICE', payload);
    return this.http.put<any>(
      environment.baseUrl + `/counter/${payload.id}`,
      payload
    );
  }

  delete(id: number) {
    return this.http.delete(environment.baseUrl + `/counter/${id}`);
  }

  assignUser(id: number, payload: any) {
    return this.http.post<any>(
      environment.baseUrl + `/counter/assignUser/${id}`,
      payload
    );
  }

  unAssignUser(id: number) {
    return this.http.delete<any>(
      environment.baseUrl + `/counter/unAssignUser/${id}`
    );
  }
}
