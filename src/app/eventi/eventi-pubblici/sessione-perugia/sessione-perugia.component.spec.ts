import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionePerugiaComponent } from './sessione-perugia.component';

describe('SessionePerugiaComponent', () => {
  let component: SessionePerugiaComponent;
  let fixture: ComponentFixture<SessionePerugiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionePerugiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionePerugiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
