import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-deck-sorter-page',
  template: `
    <app-deck></app-deck>
    <app-control-panel></app-control-panel>`,
  styleUrls: ['./deck-sorter-page.component.scss']
})
export class DeckSorterPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
