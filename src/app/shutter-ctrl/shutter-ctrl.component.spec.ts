import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShutterCtrlComponent } from './shutter-ctrl.component';

describe('ShutterCtrlComponent', () => {
  let component: ShutterCtrlComponent;
  let fixture: ComponentFixture<ShutterCtrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShutterCtrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShutterCtrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
