import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentStylesEncapsulationComponent } from './component-styles-encapsulation.component';

describe('ComponentStylesEncapsulationComponent', () => {
  let component: ComponentStylesEncapsulationComponent;
  let fixture: ComponentFixture<ComponentStylesEncapsulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentStylesEncapsulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentStylesEncapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
