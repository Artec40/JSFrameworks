import VueRouter from 'vue-router'
import DeckCreated from '../components/DeckSorterPage/DeckCreated/DeckCreated'
import DeckShuffled from '../components/DeckSorterPage/DeckShuffled/DeckShuffled'
import DeckRemoved from '../components/DeckSorterPage/DeckRemoved/DeckRemoved'
import EmptyDeck from '../components/DeckSorterPage/EmptyDeck/EmptyDeck'
import Deck from '../components/DeckSorterPage/Deck/Deck'

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/deck',
            name: 'deck',
            component: Deck
        },
        {
            path: '/deck-created',
            name: 'deck-created',
            component: DeckCreated
        },
        {
            path: '/deck-shuffled',
            name: 'deck-shuffled',
            component: DeckShuffled
        },
        {
            path: '/deck-removed',
            name: 'deck-removed',
            component: DeckRemoved
        },
        {
            path: '*',
            component: EmptyDeck
        }
    ]
})
