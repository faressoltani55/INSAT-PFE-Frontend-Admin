import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoutenancesListingComponent } from './soutenances-listing.component';

describe('SoutenancesListingComponent', () => {
  let component: SoutenancesListingComponent;
  let fixture: ComponentFixture<SoutenancesListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoutenancesListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoutenancesListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
