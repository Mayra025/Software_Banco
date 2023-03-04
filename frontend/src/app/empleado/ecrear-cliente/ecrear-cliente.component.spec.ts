import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcrearClienteComponent } from './ecrear-cliente.component';

describe('EcrearClienteComponent', () => {
  let component: EcrearClienteComponent;
  let fixture: ComponentFixture<EcrearClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcrearClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcrearClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
