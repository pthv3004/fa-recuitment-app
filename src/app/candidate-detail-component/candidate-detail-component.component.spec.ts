import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateDetailComponentComponent } from './candidate-detail-component.component';

describe('CandidateDetailComponentComponent', () => {
  let component: CandidateDetailComponentComponent;
  let fixture: ComponentFixture<CandidateDetailComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateDetailComponentComponent]
    });
    fixture = TestBed.createComponent(CandidateDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
