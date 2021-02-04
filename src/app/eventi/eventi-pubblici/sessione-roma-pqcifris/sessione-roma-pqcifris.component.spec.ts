import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessioneRomaPqcifrisComponent } from './sessione-roma-pqcifris.component';

describe('SessioneRomaPqcifrisComponent', () => {
  let component: SessioneRomaPqcifrisComponent;
  let fixture: ComponentFixture<SessioneRomaPqcifrisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessioneRomaPqcifrisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessioneRomaPqcifrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
