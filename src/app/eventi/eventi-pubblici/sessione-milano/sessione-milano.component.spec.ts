import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessioneMilanoComponent } from './sessione-milano.component';

describe('SessioneMilanoComponent', () => {
  let component: SessioneMilanoComponent;
  let fixture: ComponentFixture<SessioneMilanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessioneMilanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessioneMilanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
