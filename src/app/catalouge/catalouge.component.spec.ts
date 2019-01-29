import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalougeComponent } from './catalouge.component';

describe('CatalougeComponent', () => {
  let component: CatalougeComponent;
  let fixture: ComponentFixture<CatalougeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalougeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalougeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
