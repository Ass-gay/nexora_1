import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Direction } from './direction';

describe('Direction', () => {
  let component: Direction;
  let fixture: ComponentFixture<Direction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Direction],
    }).compileComponents();

    fixture = TestBed.createComponent(Direction);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
