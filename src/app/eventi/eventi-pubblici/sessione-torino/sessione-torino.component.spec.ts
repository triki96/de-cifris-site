import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessioneTorinoComponent } from './sessione-torino.component';

describe('SessioneTorinoComponent', () => {
  let component: SessioneTorinoComponent;
  let fixture: ComponentFixture<SessioneTorinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessioneTorinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessioneTorinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
