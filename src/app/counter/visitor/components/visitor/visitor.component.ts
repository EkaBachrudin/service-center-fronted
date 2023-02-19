import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import jsPDF from 'jspdf';
import { CounterService } from 'src/app/_services/counter/counter.service';
import { QueueService } from 'src/app/_services/queue/queue.service';
import { CounterInterfacePublic } from 'src/app/_type/counter/counter.interface';
import { QueueDataResult } from 'src/app/_type/queue/queue.interface';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.scss'],
})
export class VisitorComponent implements OnInit {
  @ViewChild('content', { static: false }) el!: ElementRef;
  counters: CounterInterfacePublic[];
  queueDataResult: QueueDataResult = {
    counter_name: '',
    counter_purpose: '',
    number_queue: 0,
  };

  constructor(
    private counterService: CounterService,
    private queueService: QueueService
  ) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.counterService.getAllCounterPublic().subscribe((data: any) => {
      let temp = [];
      data.data.map((_: CounterInterfacePublic) => {
        this.queueService
          .latestQueueByCounterPublic(_.id)
          .subscribe((queue: any) => {
            let g = {
              id: _.id,
              name: _.name,
              purpose: _.purpose,
              status_counters_id: _.status_counters_id,
              created_at: _.created_at,
              updated_at: _.updated_at,
              total_today: queue.total,
            };
            temp.push(g);
          });
      });
      this.counters = temp;
    });
  }

  generateQueue(counterId: number) {
    let param = {
      counters_id: counterId,
    };

    this.queueService.createPublic(param).subscribe((data) => {
      this.queueDataResult = {
        counter_name: data.counter.name,
        counter_purpose: data.counter.purpose,
        number_queue: data.number_queue,
      };
      console.log(this.queueDataResult);
    });

    this.load();
  }

  makePdf() {
    let pdf = new jsPDF('l', 'pt', 'c6');
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save('queue_number.pdf');
      },
    });
  }
}
