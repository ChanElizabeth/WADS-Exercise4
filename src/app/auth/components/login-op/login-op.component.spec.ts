import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOpComponent } from './login-op.component';

describe('LoginOpComponent', () => {
  let component: LoginOpComponent;
  let fixture: ComponentFixture<LoginOpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginOpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
