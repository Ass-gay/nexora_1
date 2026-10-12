import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Motive } from './motive';

describe('Motive', () => {
  let component: Motive;
  let fixture: ComponentFixture<Motive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Motive],
    }).compileComponents();

    fixture = TestBed.createComponent(Motive);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
