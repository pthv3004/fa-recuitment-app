import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllInterviewerManagementComponentComponent } from './all-interviewer-management-component.component';

describe('AllInterviewerManagementComponentComponent', () => {
  let component: AllInterviewerManagementComponentComponent;
  let fixture: ComponentFixture<AllInterviewerManagementComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllInterviewerManagementComponentComponent]
    });
    fixture = TestBed.createComponent(AllInterviewerManagementComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
