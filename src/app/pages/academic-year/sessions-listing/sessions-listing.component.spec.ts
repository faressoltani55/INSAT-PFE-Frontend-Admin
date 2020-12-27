import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsListingComponent } from './sessions-listing.component';

describe('SessionsListingComponent', () => {
  let component: SessionsListingComponent;
  let fixture: ComponentFixture<SessionsListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionsListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
