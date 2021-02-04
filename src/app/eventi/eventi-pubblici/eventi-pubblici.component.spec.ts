import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventiPubbliciComponent } from './eventi-pubblici.component';

describe('EventiPubbliciComponent', () => {
  let component: EventiPubbliciComponent;
  let fixture: ComponentFixture<EventiPubbliciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventiPubbliciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventiPubbliciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
