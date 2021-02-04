import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventiPassatiComponent } from './eventi-passati.component';

describe('EventiPassatiComponent', () => {
  let component: EventiPassatiComponent;
  let fixture: ComponentFixture<EventiPassatiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventiPassatiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventiPassatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
