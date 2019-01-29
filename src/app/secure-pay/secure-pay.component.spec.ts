import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurePayComponent } from './secure-pay.component';

describe('SecurePayComponent', () => {
  let component: SecurePayComponent;
  let fixture: ComponentFixture<SecurePayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurePayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurePayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
