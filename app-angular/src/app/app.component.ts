import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <app-informer></app-informer>
    <app-sort-starter></app-sort-starter>
    <app-deck-sorter-page></app-deck-sorter-page>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-angular';
}
