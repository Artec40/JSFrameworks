import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckSorterComponent } from './deck-sorter.component';

describe('DeckSorterComponent', () => {
  let component: DeckSorterComponent;
  let fixture: ComponentFixture<DeckSorterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeckSorterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckSorterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
