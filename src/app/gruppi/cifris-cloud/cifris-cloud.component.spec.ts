import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CifrisCloudComponent } from './cifris-cloud.component';

describe('CifrisCloudComponent', () => {
  let component: CifrisCloudComponent;
  let fixture: ComponentFixture<CifrisCloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CifrisCloudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CifrisCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
