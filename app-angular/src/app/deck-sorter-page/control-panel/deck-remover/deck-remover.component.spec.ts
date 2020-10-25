import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckRemoverComponent } from './deck-remover.component';

describe('DeckRemoverComponent', () => {
  let component: DeckRemoverComponent;
  let fixture: ComponentFixture<DeckRemoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeckRemoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckRemoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
