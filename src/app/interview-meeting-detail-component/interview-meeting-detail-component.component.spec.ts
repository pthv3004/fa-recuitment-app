import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewMeetingDetailComponentComponent } from './interview-meeting-detail-component.component';

describe('InterviewMeetingDetailComponentComponent', () => {
  let component: InterviewMeetingDetailComponentComponent;
  let fixture: ComponentFixture<InterviewMeetingDetailComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterviewMeetingDetailComponentComponent]
    });
    fixture = TestBed.createComponent(InterviewMeetingDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
