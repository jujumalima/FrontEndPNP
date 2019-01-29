import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterOnlineComponent } from './register-online.component';

describe('RegisterOnlineComponent', () => {
  let component: RegisterOnlineComponent;
  let fixture: ComponentFixture<RegisterOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
