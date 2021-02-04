import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessioneRomaCifrischainComponent } from './sessione-roma-cifrischain.component';

describe('SessioneRomaCifrischainComponent', () => {
  let component: SessioneRomaCifrischainComponent;
  let fixture: ComponentFixture<SessioneRomaCifrischainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessioneRomaCifrischainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessioneRomaCifrischainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
