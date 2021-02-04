import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItasecComponent } from './itasec.component';

describe('ItasecComponent', () => {
  let component: ItasecComponent;
  let fixture: ComponentFixture<ItasecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItasecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItasecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
