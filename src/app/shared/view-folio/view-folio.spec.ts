import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFolio } from './view-folio';

describe('ViewFolio', () => {
  let component: ViewFolio;
  let fixture: ComponentFixture<ViewFolio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewFolio],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewFolio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
