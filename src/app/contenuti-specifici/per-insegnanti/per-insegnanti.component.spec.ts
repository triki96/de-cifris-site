import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerInsegnantiComponent } from './per-insegnanti.component';

describe('PerInsegnantiComponent', () => {
  let component: PerInsegnantiComponent;
  let fixture: ComponentFixture<PerInsegnantiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerInsegnantiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerInsegnantiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
