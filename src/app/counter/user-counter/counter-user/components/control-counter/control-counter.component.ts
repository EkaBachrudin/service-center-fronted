import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { CounterService } from 'src/app/_services/counter/counter.service';
import { QueueService } from 'src/app/_services/queue/queue.service';
import { CounterInterface } from 'src/app/_type/counter/counter.interface';
import { QueueInterface } from 'src/app/_type/queue/queue.interface';

@Component({
  selector: 'app-control-counter',
  templateUrl: './control-counter.component.html',
  styleUrls: ['./control-counter.component.scss'],
})
export class ControlCounterComponent implements OnInit {
  idParam: number;
  queues: QueueInterface[];
  occureStatus: QueueInterface;
  counter: CounterInterface;

  constructor(
    private route: ActivatedRoute,
    private queueService: QueueService,
    private counterService: CounterService
  ) {}

  ngOnInit(): void {
    let fetchFromData$ = this.route.paramMap.pipe(
      switchMap((param: any) => {
        let id = Number(param.get('id'));
        this.idParam = Number(param.get('id'));
        this.counterService.getById(id).subscribe((data: any) => {
          this.counter = data;
        });
        this.getOccureStatus(id);
        return this.queueService.getAllQueueByCounterToday(id);
      })
    );

    fetchFromData$.subscribe((data: any) => {
      this.queues = data.data;
    });
  }

  getOccureStatus(counterId: number) {
    this.queueService.getOccureStatus(counterId).subscribe((data: any) => {
      this.occureStatus = data.data;
      console.log(this.occureStatus);
    });
  }
}
