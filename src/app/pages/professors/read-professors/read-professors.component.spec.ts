import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadProfessorsComponent } from './read-professors.component';

describe('ReadProfessorsComponent', () => {
  let component: ReadProfessorsComponent;
  let fixture: ComponentFixture<ReadProfessorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadProfessorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadProfessorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
