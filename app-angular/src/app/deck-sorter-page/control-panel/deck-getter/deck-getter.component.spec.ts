import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckGetterComponent } from './deck-getter.component';

describe('DeckGetterComponent', () => {
  let component: DeckGetterComponent;
  let fixture: ComponentFixture<DeckGetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeckGetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckGetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
