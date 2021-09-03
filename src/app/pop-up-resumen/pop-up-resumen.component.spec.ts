import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpResumenComponent } from './pop-up-resumen.component';

describe('PopUpResumenComponent', () => {
  let component: PopUpResumenComponent;
  let fixture: ComponentFixture<PopUpResumenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpResumenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
