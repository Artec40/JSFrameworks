import { deckAPI } from '../api'

export const decksState = {
    namespaced: true,
    state: {
        decks: [],
        currentDeck: [],
        currentDataOnButtonClick: {
            showDeckName: '',
            createDeck: {deckName: '', cardsInDeck: 0},
            shuffleDeckName: '',
            removeDeckName: ''
        }
    },

    mutations: {
        SET_DECKS(state, decks) {
            state.decks = decks
        },
        SET_CURRENT_DECK(state, deck) {
            state.currentDeck = deck
        },
        SET_DATA_ON_CREATE_BUTTON_CLICK(state, selectValue) {
            state.currentDataOnButtonClick.createDeck.cardsInDeck = selectValue
        },
        SET_DECKNAME_ON_CREATE_INPUT(state, inputValue) {
            state.currentDataOnButtonClick.createDeck.deckName = inputValue
        },
        SET_DATA_ON_SHOW_BUTTON_CLICK(state, selectValue) {
            state.currentDataOnButtonClick.showDeckName = selectValue
        },
        SET_DATA_ON_SHUFFLE_BUTTON_CLICK(state, selectValue) {
            state.currentDataOnButtonClick.shuffleDeckName = selectValue
        },
        SET_DATA_ON_REMOVE_BUTTON_CLICK(state, selectValue) {
            state.currentDataOnButtonClick.removeDeckName = selectValue
        }
    },

    actions: {
        async GET_DECKS({commit}) {
            let deck = await deckAPI.getDecks()
            commit('SET_DECKS', deck.data)
        },
        async GET_CURRENT_DECK({commit}, deckName) {
            let deck = await deckAPI.getDeck(deckName)
            commit('SET_CURRENT_DECK', deck.data)
        },
        async CREATE_DECK({dispatch}, {deckName, cardsInDeck}) {
            await deckAPI.createDeck(deckName, cardsInDeck)
            dispatch('GET_DECKS')
        },
        async SHUFFLE_DECK({dispatch}, deckName) {
            await deckAPI.shuffleDeck(deckName)
            dispatch('GET_DECKS')
        },
        async REMOVE_DECK({dispatch}, deckName) {
            await deckAPI.deleteDeck(deckName)
            dispatch('GET_DECKS')
        }
    },
}
