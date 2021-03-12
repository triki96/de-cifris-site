import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerAziendeComponent } from './per-aziende.component';

describe('PerAziendeComponent', () => {
  let component: PerAziendeComponent;
  let fixture: ComponentFixture<PerAziendeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerAziendeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerAziendeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
