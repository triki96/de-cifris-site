import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerAccademiaComponent } from './per-accademia.component';

describe('PerAccademiaComponent', () => {
  let component: PerAccademiaComponent;
  let fixture: ComponentFixture<PerAccademiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerAccademiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerAccademiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
