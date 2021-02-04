import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoConoscitivoComponent } from './evento-conoscitivo.component';

describe('EventoConoscitivoComponent', () => {
  let component: EventoConoscitivoComponent;
  let fixture: ComponentFixture<EventoConoscitivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoConoscitivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoConoscitivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
