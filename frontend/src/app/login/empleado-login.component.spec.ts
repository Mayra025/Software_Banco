import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoLoginComponent } from './empleado-login.component';

describe('EmpleadoLoginComponent', () => {
  let component: EmpleadoLoginComponent;
  let fixture: ComponentFixture<EmpleadoLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadoLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
