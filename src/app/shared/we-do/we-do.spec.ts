import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeDo } from './we-do';

describe('WeDo', () => {
  let component: WeDo;
  let fixture: ComponentFixture<WeDo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeDo],
    }).compileComponents();

    fixture = TestBed.createComponent(WeDo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
