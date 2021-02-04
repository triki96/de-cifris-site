import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IniziativeDivulgativeComponent } from './iniziative-divulgative.component';

describe('IniziativeDivulgativeComponent', () => {
  let component: IniziativeDivulgativeComponent;
  let fixture: ComponentFixture<IniziativeDivulgativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniziativeDivulgativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IniziativeDivulgativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
