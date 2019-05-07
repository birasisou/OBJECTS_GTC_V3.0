import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FanNgAnimationComponent } from './fan-ng-animation.component';

describe('FanComponent', () => {
  let component: FanNgAnimationComponent;
  let fixture: ComponentFixture<FanNgAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanNgAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanNgAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
