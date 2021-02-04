import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GareCrittograficheComponent } from './gare-crittografiche.component';

describe('GareCrittograficheComponent', () => {
  let component: GareCrittograficheComponent;
  let fixture: ComponentFixture<GareCrittograficheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GareCrittograficheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GareCrittograficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
