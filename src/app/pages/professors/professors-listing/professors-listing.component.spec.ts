import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorsListingComponent } from './professors-listing.component';

describe('ProfessorsListingComponent', () => {
  let component: ProfessorsListingComponent;
  let fixture: ComponentFixture<ProfessorsListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorsListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
