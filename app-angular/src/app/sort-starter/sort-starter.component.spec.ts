import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortStarterComponent } from './sort-starter.component';

describe('SortStarterComponent', () => {
  let component: SortStarterComponent;
  let fixture: ComponentFixture<SortStarterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortStarterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortStarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
