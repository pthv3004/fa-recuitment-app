import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuitmentManagementComponent } from './recuitment-management.component';

describe('RecuitmentManagementComponent', () => {
  let component: RecuitmentManagementComponent;
  let fixture: ComponentFixture<RecuitmentManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecuitmentManagementComponent]
    });
    fixture = TestBed.createComponent(RecuitmentManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
