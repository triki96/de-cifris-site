import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerStudentiComponent } from './per-studenti.component';

describe('PerStudentiComponent', () => {
  let component: PerStudentiComponent;
  let fixture: ComponentFixture<PerStudentiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerStudentiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerStudentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
