import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forfaits } from './forfaits';

describe('Forfaits', () => {
  let component: Forfaits;
  let fixture: ComponentFixture<Forfaits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Forfaits],
    }).compileComponents();

    fixture = TestBed.createComponent(Forfaits);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
