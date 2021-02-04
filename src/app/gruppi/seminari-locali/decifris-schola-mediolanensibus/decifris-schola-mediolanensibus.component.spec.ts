import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecifrisScholaMediolanensibusComponent } from './decifris-schola-mediolanensibus.component';

describe('DecifrisScholaMediolanensibusComponent', () => {
  let component: DecifrisScholaMediolanensibusComponent;
  let fixture: ComponentFixture<DecifrisScholaMediolanensibusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecifrisScholaMediolanensibusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecifrisScholaMediolanensibusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
