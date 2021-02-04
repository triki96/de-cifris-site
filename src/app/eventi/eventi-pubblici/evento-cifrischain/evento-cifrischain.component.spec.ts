import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoCifrischainComponent } from './evento-cifrischain.component';

describe('EventoCifrischainComponent', () => {
  let component: EventoCifrischainComponent;
  let fixture: ComponentFixture<EventoCifrischainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoCifrischainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoCifrischainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
