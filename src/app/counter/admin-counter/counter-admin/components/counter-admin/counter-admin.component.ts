import { HttpParams } from '@angular/common/http';
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
  currentPage: number = 1;
  perPage: number = 10;
  totalData: any;

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.load('', '', 1);
  }

  load(status: string, search: string, currentPage: number): void {
    let params = new HttpParams();

    params = params.set('currentPage', currentPage);
    params = params.set('perPage', this.perPage);
    params = params.set('sort', 'asc');

    if (search != '') {
      params = params.set('search', search);
    }

    if (status != '') {
      params = params.set('status', status);
    }

    this.counterService.get(params).subscribe((data: any) => {
      this.counters = data.data;
      this.totalData = data.totalData;
      console.log(this.totalData);
    });
  }

  filters(status: string, search: string): void {
    this.currentPage = 1;
    this.load(status, search, 1);
  }

  changePage(status: string, search: string, e: any) {
    this.currentPage = e;
    this.load(status, search, e);
  }

  absoluteIndex(indexOnPage: number): number {
    return this.perPage * (this.currentPage - 1) + indexOnPage + 1;
  }
}
