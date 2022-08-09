import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyChild2Component } from './my-child2.component';

describe('MyChild2Component', () => {
  let component: MyChild2Component;
  let fixture: ComponentFixture<MyChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyChild2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
