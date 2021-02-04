import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AderentiComponent } from './aderenti.component';

describe('AderentiComponent', () => {
  let component: AderentiComponent;
  let fixture: ComponentFixture<AderentiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AderentiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AderentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
