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

  create(payload: any) {
    return this.http.post<any>(environment.baseUrl + '/counter', payload);
  }

  update(payload: CounterInterface) {
    return this.http.put<any>(
      environment.baseUrl + `/note/${payload.id}`,
      payload
    );
  }

  delete(id: number) {
    return this.http.delete(environment.baseUrl + `/note/${id}`);
  }
}
