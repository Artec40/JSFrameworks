import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-control-panel',
  template: `
    <app-deck-creater></app-deck-creater>
    <app-deck-getter></app-deck-getter>
    <app-deck-remover></app-deck-remover>
    <app-deck-sorter></app-deck-sorter>`,
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
