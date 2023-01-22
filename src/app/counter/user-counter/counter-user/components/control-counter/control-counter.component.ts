import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { CounterService } from 'src/app/_services/counter/counter.service';
import { QueueService } from 'src/app/_services/queue/queue.service';
import { CounterInterface } from 'src/app/_type/counter/counter.interface';
import { QueueInterface } from 'src/app/_type/queue/queue.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-control-counter',
  templateUrl: './control-counter.component.html',
  styleUrls: ['./control-counter.component.scss'],
})
export class ControlCounterComponent implements OnInit {
  idParam: number;
  queues: any[] = [];
  occureStatus: QueueInterface;
  counter: CounterInterface;
  currentOccureNumber: number;

  constructor(
    private route: ActivatedRoute,
    private queueService: QueueService,
    private counterService: CounterService
  ) {}

  ngOnInit(): void {
    this.loadQueue();
  }

  loadQueue() {
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
      data.data.map((data: any, index: number) => {
        let q: any = {
          id: data.id,
          no: index + 1,
          status_queues_id: data.status_queues_id,
        };
        this.queues.push(q);
        if (q.id == this.occureStatus.id) {
          this.currentOccureNumber = q.no;
        }
      });
    });
  }

  getOccureStatus(counterId: number) {
    this.queueService.getOccureStatus(counterId).subscribe((data: any) => {
      this.occureStatus = data.data;
    });
  }

  previous(numberCurrentOccure: number) {
    if (numberCurrentOccure == this.queues[0].no) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Your in the first of queue you cant previous queue',
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      this.queueService
        .previous(this.queues[numberCurrentOccure - 1].id, this.idParam)
        .subscribe();
    }
  }

  next(numberCurrentOccure: number) {
    if (numberCurrentOccure == this.queues[this.queues.length - 1].no) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Your in the lats of queue you cant next the queue',
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      this.queueService
        .next(this.queues[numberCurrentOccure - 1].id, this.idParam)
        .subscribe();
    }
  }

  skip() {
    this.queueService.skip(0, 0);
  }
}
