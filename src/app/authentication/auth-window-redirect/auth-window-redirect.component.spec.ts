import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthWindowRedirectComponent } from './auth-window-redirect.component';

describe('AuthWindowRedirectComponent', () => {
  let component: AuthWindowRedirectComponent;
  let fixture: ComponentFixture<AuthWindowRedirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthWindowRedirectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthWindowRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
