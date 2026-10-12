import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickAnswers } from './quick-answers';

describe('QuickAnswers', () => {
  let component: QuickAnswers;
  let fixture: ComponentFixture<QuickAnswers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickAnswers],
    }).compileComponents();

    fixture = TestBed.createComponent(QuickAnswers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
