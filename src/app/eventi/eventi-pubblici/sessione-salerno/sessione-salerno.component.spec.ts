import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessioneSalernoComponent } from './sessione-salerno.component';

describe('SessioneSalernoComponent', () => {
  let component: SessioneSalernoComponent;
  let fixture: ComponentFixture<SessioneSalernoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessioneSalernoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessioneSalernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
