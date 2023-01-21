import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QueueInterface } from 'src/app/_type/queue/queue.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class QueueService {
  constructor(private http: HttpClient) {}

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
}
