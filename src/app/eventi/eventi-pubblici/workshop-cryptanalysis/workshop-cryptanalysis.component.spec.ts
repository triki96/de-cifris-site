import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopCryptanalysisComponent } from './workshop-cryptanalysis.component';

describe('WorkshopCryptanalysisComponent', () => {
  let component: WorkshopCryptanalysisComponent;
  let fixture: ComponentFixture<WorkshopCryptanalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopCryptanalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopCryptanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
