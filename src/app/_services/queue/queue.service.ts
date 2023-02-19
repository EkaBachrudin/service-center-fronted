import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QueueInterface } from 'src/app/_type/queue/queue.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class QueueService {
  constructor(private http: HttpClient) {}

  createPublic(payload: any) {
    return this.http.post<any>(environment.baseUrl + '/public/queue', payload);
  }

  getAllQueueByCounterToday(counterId: number) {
    return this.http.get<QueueInterface[]>(
      environment.baseUrl + `/queuesByCounter/today/${counterId}`
    );
  }

  getOccureStatus(counterId: number) {
    return this.http.get<QueueInterface>(
      environment.baseUrl + `/queueStatusOccure/${counterId}`
    );
  }

  latestQueueByCounter(counterId: number) {
    return this.http.get<QueueInterface>(
      environment.baseUrl + `/latestQueueByCounter/today/${counterId}`
    );
  }

  latestQueueByCounterPublic(counterId: number) {
    return this.http.get<QueueInterface>(
      environment.baseUrl + `/public/latestQueueByCounter/today/${counterId}`
    );
  }

  next(queueId: number, counterId: number) {
    return this.http.put<any>(
      environment.baseUrl + `/changeStatusQueue/${queueId}`,
      {
        status_queues_id: 3,
        counters_id: counterId,
      }
    );
  }

  previous(queueId: number, counterId: number) {
    return this.http.put<any>(
      environment.baseUrl + `/changeStatusQueue/${queueId}`,
      {
        status_queues_id: 1,
        counters_id: counterId,
      }
    );
  }

  skip(queueId: number, counterId: number) {
    return this.http.put<any>(
      environment.baseUrl + `/changeStatusQueue/${queueId}`,
      {
        status_queues_id: 4,
        counters_id: counterId,
      }
    );
  }

  toOccure(queueId: number, counterId: number) {
    return this.http.put<any>(
      environment.baseUrl + `/changeStatusQueue/${queueId}`,
      {
        status_queues_id: 2,
        counters_id: counterId,
      }
    );
  }
}
