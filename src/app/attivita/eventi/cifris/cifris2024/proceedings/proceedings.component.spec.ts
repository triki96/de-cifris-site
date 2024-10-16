import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceedingsComponent24 } from './proceedings.component';

describe('ProceedingsComponent24', () => {
  let component: ProceedingsComponent;
  let fixture: ComponentFixture<ProceedingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProceedingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProceedingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
