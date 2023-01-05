import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdminCounterComponent } from './dashboard-admin-counter.component';

describe('DashboardAdminCounterComponent', () => {
  let component: DashboardAdminCounterComponent;
  let fixture: ComponentFixture<DashboardAdminCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAdminCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAdminCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
