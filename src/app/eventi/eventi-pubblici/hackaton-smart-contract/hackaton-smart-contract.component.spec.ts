import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackatonSmartContractComponent } from './hackaton-smart-contract.component';

describe('HackatonSmartContractComponent', () => {
  let component: HackatonSmartContractComponent;
  let fixture: ComponentFixture<HackatonSmartContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackatonSmartContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackatonSmartContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
