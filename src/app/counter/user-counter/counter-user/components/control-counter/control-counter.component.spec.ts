import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlCounterComponent } from './control-counter.component';

describe('ControlCounterComponent', () => {
  let component: ControlCounterComponent;
  let fixture: ComponentFixture<ControlCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
