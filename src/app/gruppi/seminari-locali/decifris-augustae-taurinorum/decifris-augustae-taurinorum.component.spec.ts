import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecifrisAugustaeTaurinorumComponent } from './decifris-augustae-taurinorum.component';

describe('DecifrisAugustaeTaurinorumComponent', () => {
  let component: DecifrisAugustaeTaurinorumComponent;
  let fixture: ComponentFixture<DecifrisAugustaeTaurinorumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecifrisAugustaeTaurinorumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecifrisAugustaeTaurinorumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
