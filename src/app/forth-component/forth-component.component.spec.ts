import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForthComponentComponent } from './forth-component.component';

describe('ForthComponentComponent', () => {
  let component: ForthComponentComponent;
  let fixture: ComponentFixture<ForthComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForthComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForthComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
