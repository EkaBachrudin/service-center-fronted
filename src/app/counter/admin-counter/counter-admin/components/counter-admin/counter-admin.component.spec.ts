import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterAdminComponent } from './counter-admin.component';

describe('CounterAdminComponent', () => {
  let component: CounterAdminComponent;
  let fixture: ComponentFixture<CounterAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
