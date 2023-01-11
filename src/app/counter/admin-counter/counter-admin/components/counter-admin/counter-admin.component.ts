import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { FilterInterface } from 'src/app/shared/types/search.interface';
import { CounterService } from 'src/app/_services/counter/counter.service';
import { CounterInterface } from 'src/app/_type/counter/counter.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-counter-admin',
  templateUrl: './counter-admin.component.html',
  styleUrls: ['./counter-admin.component.scss'],
})
export class CounterAdminComponent implements OnInit {
  counters: CounterInterface[] = [];

  constructor(
    private counterService: CounterService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.load('', '');
  }

  load(status: string, search: string): void {
    let params = new HttpParams();

    params = params.set('currentPage', 1);
    params = params.set('perPage', 20);
    params = params.set('sort', 'desc');

    if (search != '') {
      params = params.set('search', search);
    }

    if (status != '') {
      params = params.set('status', status);
    }

    this.counterService.get(params).subscribe((data: any) => {
      this.counters = data.data;
    });
  }

  filters(status: string, search: string): void {
    this.load(status, search);
  }
}
