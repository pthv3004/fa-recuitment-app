import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvSuggestionDetailComponentComponent } from './cv-suggestion-detail-component.component';

describe('CvSuggestionDetailComponentComponent', () => {
  let component: CvSuggestionDetailComponentComponent;
  let fixture: ComponentFixture<CvSuggestionDetailComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvSuggestionDetailComponentComponent]
    });
    fixture = TestBed.createComponent(CvSuggestionDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
