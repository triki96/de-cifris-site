import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathCifrisComponent } from './math-cifris.component';

describe('MathCifrisComponent', () => {
  let component: MathCifrisComponent;
  let fixture: ComponentFixture<MathCifrisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathCifrisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathCifrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
