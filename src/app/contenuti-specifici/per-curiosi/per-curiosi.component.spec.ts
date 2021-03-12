import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerCuriosiComponent } from './per-curiosi.component';

describe('PerCuriosiComponent', () => {
  let component: PerCuriosiComponent;
  let fixture: ComponentFixture<PerCuriosiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerCuriosiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerCuriosiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
