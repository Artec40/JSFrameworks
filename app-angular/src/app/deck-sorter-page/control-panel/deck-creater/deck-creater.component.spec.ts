import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckCreaterComponent } from './deck-creater.component';

describe('DeckCreaterComponent', () => {
  let component: DeckCreaterComponent;
  let fixture: ComponentFixture<DeckCreaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeckCreaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckCreaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
