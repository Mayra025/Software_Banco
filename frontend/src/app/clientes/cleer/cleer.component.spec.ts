import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleerComponent } from './cleer.component';

describe('CleerComponent', () => {
  let component: CleerComponent;
  let fixture: ComponentFixture<CleerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CleerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CleerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
