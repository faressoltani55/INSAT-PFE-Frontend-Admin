import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfeSubjectRequestsComponent } from './pfe-subject-requests.component';

describe('PfeSubjectRequestsComponent', () => {
  let component: PfeSubjectRequestsComponent;
  let fixture: ComponentFixture<PfeSubjectRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfeSubjectRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PfeSubjectRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
