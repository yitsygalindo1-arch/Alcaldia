import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bienes } from './bienes';

describe('Bienes', () => {
  let component: Bienes;
  let fixture: ComponentFixture<Bienes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bienes],
    }).compileComponents();

    fixture = TestBed.createComponent(Bienes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
