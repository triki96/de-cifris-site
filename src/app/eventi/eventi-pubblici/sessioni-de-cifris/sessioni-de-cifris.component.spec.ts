import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessioniDeCifrisComponent } from './sessioni-de-cifris.component';

describe('SessioniDeCifrisComponent', () => {
  let component: SessioniDeCifrisComponent;
  let fixture: ComponentFixture<SessioniDeCifrisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessioniDeCifrisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessioniDeCifrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
