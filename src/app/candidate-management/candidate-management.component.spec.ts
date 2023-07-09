import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateManagementComponent } from './candidate-management.component';

describe('CandidateManagementComponent', () => {
  let component: CandidateManagementComponent;
  let fixture: ComponentFixture<CandidateManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateManagementComponent]
    });
    fixture = TestBed.createComponent(CandidateManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
