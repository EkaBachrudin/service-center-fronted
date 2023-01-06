import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-report-counter',
  templateUrl: './report-counter.component.html',
  styleUrls: ['./report-counter.component.scss']
})
export class ReportCounterComponent implements OnInit {

  constructor() { }

  dateRange = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  ngOnInit(): void {
  }

}
