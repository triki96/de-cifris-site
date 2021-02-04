import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CifrisChainComponent } from './cifris-chain.component';

describe('CifrisChainComponent', () => {
  let component: CifrisChainComponent;
  let fixture: ComponentFixture<CifrisChainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CifrisChainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CifrisChainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
