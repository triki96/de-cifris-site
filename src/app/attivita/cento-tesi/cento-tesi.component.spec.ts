import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentoTesiComponent } from './cento-tesi.component';

describe('CentoTesiComponent', () => {
  let component: CentoTesiComponent;
  let fixture: ComponentFixture<CentoTesiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentoTesiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentoTesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
