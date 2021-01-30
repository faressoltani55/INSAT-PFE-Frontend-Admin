import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectRequestCardComponent } from './subject-request-card.component';

describe('SubjectRequestCardComponent', () => {
  let component: SubjectRequestCardComponent;
  let fixture: ComponentFixture<SubjectRequestCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectRequestCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectRequestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
