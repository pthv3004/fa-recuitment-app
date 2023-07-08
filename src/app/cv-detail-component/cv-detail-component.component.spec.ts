import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvDetailComponentComponent } from './cv-detail-component.component';

describe('CvDetailComponentComponent', () => {
  let component: CvDetailComponentComponent;
  let fixture: ComponentFixture<CvDetailComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvDetailComponentComponent]
    });
    fixture = TestBed.createComponent(CvDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
