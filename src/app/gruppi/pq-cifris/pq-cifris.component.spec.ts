import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PqCifrisComponent } from './pq-cifris.component';

describe('PqCifrisComponent', () => {
  let component: PqCifrisComponent;
  let fixture: ComponentFixture<PqCifrisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PqCifrisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PqCifrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
