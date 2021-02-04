import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DidatticaUniversitariaComponent } from './didattica-universitaria.component';

describe('DidatticaUniversitariaComponent', () => {
  let component: DidatticaUniversitariaComponent;
  let fixture: ComponentFixture<DidatticaUniversitariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DidatticaUniversitariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DidatticaUniversitariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
