import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingInterviewComponentComponent } from './tracking-interview-component.component';

describe('TrackingInterviewComponentComponent', () => {
  let component: TrackingInterviewComponentComponent;
  let fixture: ComponentFixture<TrackingInterviewComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackingInterviewComponentComponent]
    });
    fixture = TestBed.createComponent(TrackingInterviewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
