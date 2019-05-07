import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FanCanvasComponent } from './fan-canvas.component';

describe('FanCanvasComponent', () => {
  let component: FanCanvasComponent;
  let fixture: ComponentFixture<FanCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
