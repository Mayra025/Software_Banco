import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcrearCuentaComponent } from './ecrear-cuenta.component';

describe('EcrearCuentaComponent', () => {
  let component: EcrearCuentaComponent;
  let fixture: ComponentFixture<EcrearCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcrearCuentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcrearCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
