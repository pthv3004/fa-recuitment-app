import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvSuggestionComponentComponent } from './cv-suggestion-component.component';

describe('CvSuggestionComponentComponent', () => {
  let component: CvSuggestionComponentComponent;
  let fixture: ComponentFixture<CvSuggestionComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvSuggestionComponentComponent]
    });
    fixture = TestBed.createComponent(CvSuggestionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
