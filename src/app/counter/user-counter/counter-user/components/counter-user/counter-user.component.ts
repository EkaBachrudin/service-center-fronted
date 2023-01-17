import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/_services/counter/counter.service';
import { UserService } from 'src/app/_services/user/user.service';
import { CounterInterface } from 'src/app/_type/counter/counter.interface';

@Component({
  selector: 'app-counter-user',
  templateUrl: './counter-user.component.html',
  styleUrls: ['./counter-user.component.scss'],
})
export class CounterUserComponent implements OnInit {
  counters: CounterInterface[];

  constructor(
    public counterService: CounterService,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.userService.profileUser().subscribe((data: any) => {
      this.counterService.getCounterByUser(data.id).subscribe((data: any) => {
        this.counters = data.data;
      });
    });
  }
}
