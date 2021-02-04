import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessioneRomaComponent } from './sessione-roma.component';

describe('SessioneRomaComponent', () => {
  let component: SessioneRomaComponent;
  let fixture: ComponentFixture<SessioneRomaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessioneRomaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessioneRomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
