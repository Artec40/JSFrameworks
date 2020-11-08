import {Component, OnInit} from '@angular/core';
import {Select} from "@ngxs/store";
import {Card} from "../../../store/app.model";
import {Observable} from "rxjs/index";
import {AppState} from "../../../store/app.state";

@Component({
  selector: 'app-deck',
  template: `
  <app-card *ngFor="let card of cards$ | async" [url]="directoryUrl+card.url"></app-card>`,
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {
  directoryUrl: string ='/assets/images';

  @Select(AppState.getCards) cards$: Observable<Card[]>;

  constructor() {
   }


  ngOnInit(): void {
  }

}
