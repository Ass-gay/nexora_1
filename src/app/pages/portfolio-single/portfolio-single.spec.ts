import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSingle } from './portfolio-single';

describe('PortfolioSingle', () => {
  let component: PortfolioSingle;
  let fixture: ComponentFixture<PortfolioSingle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioSingle],
    }).compileComponents();

    fixture = TestBed.createComponent(PortfolioSingle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
