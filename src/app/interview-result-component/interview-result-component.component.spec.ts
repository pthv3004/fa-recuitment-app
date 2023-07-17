import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewResultComponentComponent } from './interview-result-component.component';

describe('InterviewResultComponentComponent', () => {
  let component: InterviewResultComponentComponent;
  let fixture: ComponentFixture<InterviewResultComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterviewResultComponentComponent]
    });
    fixture = TestBed.createComponent(InterviewResultComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
