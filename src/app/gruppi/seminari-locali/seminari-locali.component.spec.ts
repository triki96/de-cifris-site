import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeminariLocaliComponent } from './seminari-locali.component';

describe('SeminariLocaliComponent', () => {
  let component: SeminariLocaliComponent;
  let fixture: ComponentFixture<SeminariLocaliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeminariLocaliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeminariLocaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
