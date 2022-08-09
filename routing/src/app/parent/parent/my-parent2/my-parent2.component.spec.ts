import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyParent2Component } from './my-parent2.component';

describe('MyParent2Component', () => {
  let component: MyParent2Component;
  let fixture: ComponentFixture<MyParent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyParent2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyParent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
