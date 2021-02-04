import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuoveAziendeInteressateComponent } from './nuove-aziende-interessate.component';

describe('NuoveAziendeInteressateComponent', () => {
  let component: NuoveAziendeInteressateComponent;
  let fixture: ComponentFixture<NuoveAziendeInteressateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuoveAziendeInteressateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuoveAziendeInteressateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
