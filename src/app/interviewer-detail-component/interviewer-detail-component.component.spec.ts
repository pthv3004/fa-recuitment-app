import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewerDetailComponentComponent } from './interviewer-detail-component.component';

describe('InterviewerDetailComponentComponent', () => {
  let component: InterviewerDetailComponentComponent;
  let fixture: ComponentFixture<InterviewerDetailComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterviewerDetailComponentComponent]
    });
    fixture = TestBed.createComponent(InterviewerDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
