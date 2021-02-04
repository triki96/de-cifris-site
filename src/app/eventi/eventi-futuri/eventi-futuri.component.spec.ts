import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventiFuturiComponent } from './eventi-futuri.component';

describe('EventiFuturiComponent', () => {
  let component: EventiFuturiComponent;
  let fixture: ComponentFixture<EventiFuturiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventiFuturiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventiFuturiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
