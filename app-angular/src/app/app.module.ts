import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgxsModule} from '@ngxs/store';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {InformerComponent} from './informer/informer.component';
import {SortStarterComponent} from './sort-starter/sort-starter.component';
import {DeckSorterPageComponent} from './deck-sorter-page/deck-sorter-page.component';
import {DeckComponent} from './deck-sorter-page/deck/deck.component';
import {ControlPanelComponent} from './deck-sorter-page/control-panel/control-panel.component';
import {DeckCreaterComponent} from './deck-sorter-page/control-panel/deck-creater/deck-creater.component';
import {DeckGetterComponent} from './deck-sorter-page/control-panel/deck-getter/deck-getter.component';
import {DeckRemoverComponent} from './deck-sorter-page/control-panel/deck-remover/deck-remover.component';
import {DeckSorterComponent} from './deck-sorter-page/control-panel/deck-sorter/deck-sorter.component';
import {CardComponent} from './deck-sorter-page/deck/card/card.component';
import {AppState} from "../store/app.state";
import { CreateComponent } from './deck-sorter-page/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InformerComponent,
    SortStarterComponent,
    DeckSorterPageComponent,
    DeckComponent,
    ControlPanelComponent,
    DeckCreaterComponent,
    DeckGetterComponent,
    DeckRemoverComponent,
    DeckSorterComponent,
    CardComponent,
    CreateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([
      AppState,
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
