import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grafcias1Component } from './grafcias1.component';

describe('Grafcias1Component', () => {
  let component: Grafcias1Component;
  let fixture: ComponentFixture<Grafcias1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grafcias1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grafcias1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
