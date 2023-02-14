import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTransferenciaComponent } from './creartransferencia.component';

describe('CrearTransferenciaComponent', () => {
  let component: CrearTransferenciaComponent;
  let fixture: ComponentFixture<CrearTransferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTransferenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearTransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
