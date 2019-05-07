import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FanCssComponent } from './fan-css.component';

describe('FanCssComponent', () => {
  let component: FanCssComponent;
  let fixture: ComponentFixture<FanCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
