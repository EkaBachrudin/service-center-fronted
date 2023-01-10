import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/_services/counter/counter.service';
import { CounterInterface } from 'src/app/_type/counter/counter.interface';

@Component({
  selector: 'app-counter-admin',
  templateUrl: './counter-admin.component.html',
  styleUrls: ['./counter-admin.component.scss'],
})
export class CounterAdminComponent implements OnInit {
  counters: CounterInterface[] = [];
  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.counterService.get().subscribe((data: any) => {
      this.counters = data.data;
    });
  }
}
