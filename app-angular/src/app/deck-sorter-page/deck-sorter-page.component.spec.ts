import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckSorterPageComponent } from './deck-sorter-page.component';

describe('DeckSorterPageComponent', () => {
  let component: DeckSorterPageComponent;
  let fixture: ComponentFixture<DeckSorterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeckSorterPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckSorterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
