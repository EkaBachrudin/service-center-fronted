import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUserCounterComponent } from './dashboard-user-counter.component';

describe('DashboardUserCounterComponent', () => {
  let component: DashboardUserCounterComponent;
  let fixture: ComponentFixture<DashboardUserCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardUserCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardUserCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
