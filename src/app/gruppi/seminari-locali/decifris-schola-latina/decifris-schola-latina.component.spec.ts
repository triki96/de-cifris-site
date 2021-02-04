import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecifrisScholaLatinaComponent } from './decifris-schola-latina.component';

describe('DecifrisScholaLatinaComponent', () => {
  let component: DecifrisScholaLatinaComponent;
  let fixture: ComponentFixture<DecifrisScholaLatinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecifrisScholaLatinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecifrisScholaLatinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
