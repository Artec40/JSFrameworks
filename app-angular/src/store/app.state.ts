import {Selector, State} from '@ngxs/store';
import {Deck} from "./app.model";

export class AppStateModel {
  decks: Deck[];
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    decks: [
      {
        id: 1,
        name: '24deck',
        quantity: 24,
        cards: [
          {
            name: 'nine clubs',
            url: '/cards/nine-clubs.png'
          },
          {
            name: 'ten clubs',
            url: '/cards/ten-clubs.png'
          },
          {
            name: 'jack clubs',
            url: '/cards/jack-clubs.png'
          },
          {
            name: 'queen clubs',
            url: '/cards/queen-clubs.png'
          },
          {
            name: 'king clubs',
            url: '/cards/king-clubs.png'
          },
          {
            name: 'ace clubs',
            url: '/cards/ace-clubs.png'
          },
          {
            name: 'nine diamonds',
            url: '/cards/nine-diamonds.png'
          },
          {
            name: 'ten diamonds',
            url: '/cards/ten-diamonds.png'
          },
          {
            name: 'jack diamonds',
            url: '/cards/jack-diamonds.png'
          },
          {
            name: 'queen diamonds',
            url: '/cards/queen-diamonds.png'
          },
          {
            name: 'king diamonds',
            url: '/cards/king-diamonds.png'
          },
          {
            name: 'ace diamonds',
            url: '/cards/ace-diamonds.png'
          },
          {
            name: 'nine hearts',
            url: '/cards/nine-hearts.png'
          },
          {
            name: 'ten hearts',
            url: '/cards/ten-hearts.png'
          },
          {
            name: 'jack hearts',
            url: '/cards/jack-hearts.png'
          },
          {
            name: 'queen hearts',
            url: '/cards/queen-hearts.png'
          },
          {
            name: 'king hearts',
            url: '/cards/king-hearts.png'
          },
          {
            name: 'ace hearts',
            url: '/cards/ace-hearts.png'
          },
          {
            name: 'nine spades',
            url: '/cards/nine-spades.png'
          },
          {
            name: 'ten spades',
            url: '/cards/ten-spades.png'
          },
          {
            name: 'jack spades',
            url: '/cards/jack-spades.png'
          },
          {
            name: 'queen spades',
            url: '/cards/queen-spades.png'
          },
          {
            name: 'king spades',
            url: '/cards/king-spades.png'
          },
          {
            name: 'ace spades',
            url: '/cards/ace-spades.png'
          },
        ]
      }
    ]
  }
})

export class AppState {

  @Selector()
  static getCards(state: AppStateModel) {
    return state.decks[0].cards
  }
}
