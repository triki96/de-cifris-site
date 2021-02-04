import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecifrisAthesisComponent } from './decifris-athesis.component';

describe('DecifrisAthesisComponent', () => {
  let component: DecifrisAthesisComponent;
  let fixture: ComponentFixture<DecifrisAthesisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecifrisAthesisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecifrisAthesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
