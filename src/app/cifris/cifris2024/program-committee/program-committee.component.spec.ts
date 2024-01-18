import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramCommitteeComponent24 } from './program-committee.component';

describe('ProgramCommitteeComponent24', () => {
  let component: ProgramCommitteeComponent;
  let fixture: ComponentFixture<ProgramCommitteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramCommitteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
