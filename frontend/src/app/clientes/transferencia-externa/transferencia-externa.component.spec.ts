import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciaInternaComponent } from './transferencia-interna.component';

describe('TransferenciaInternaComponent', () => {
  let component: TransferenciaInternaComponent;
  let fixture: ComponentFixture<TransferenciaInternaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferenciaInternaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferenciaInternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
