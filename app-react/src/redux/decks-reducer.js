import { deckAPI } from '../api'

const SET_DECKS = 'SET_DECKS'
const SET_CURRENT_DECK = 'SET_CURRENT_DECK'
const SET_DATA_ON_SHOW_BUTTON_CLICK = 'SET_DATA_ON_SHOW_BUTTON_CLICK'
const SET_DATA_ON_SHUFFLE_BUTTON_CLICK = 'SET_DATA_ON_SHUFFLE_BUTTON_CLICK'
const SET_DATA_ON_REMOVE_BUTTON_CLICK = 'SET_DATA_ON_REMOVE_BUTTON_CLICK'
const SET_DECKNAME_ON_CREATE_INPUT = 'SET_DECKNAME_ON_CREATE_INPUT'
const SET_DATA_ON_CREATE_BUTTON_CLICK = 'SET_DATA_ON_CREATE_BUTTON_CLICK'

let initialState = {
    decks: [],
    currentDeck: [],
    currentDataOnButtonClick: {
        showDeckName: '',
        createDeck: {deckName: '', cardsInDeck: 0},
        shuffleDeckName: '',
        removeDeckName: ''
    }

}

const decksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DECKS: {
            return {
                ...state, decks: action.decks
            }
        }
        case SET_CURRENT_DECK: {
            return {
                ...state, currentDeck: action.deck
            }
        }
        case SET_DATA_ON_SHOW_BUTTON_CLICK: {
            return {
                ...state,
                currentDataOnButtonClick: {...state.currentDataOnButtonClick, showDeckName: action.selectValue}
            }
        }
        case SET_DATA_ON_CREATE_BUTTON_CLICK: {
            return {
                ...state,
                currentDataOnButtonClick: {
                    ...state.currentDataOnButtonClick,
                    createDeck: {
                        deckName: state.currentDataOnButtonClick.createDeck.deckName,
                        cardsInDeck: Number(action.selectValue)
                    }
                }
            }
        }
        case SET_DECKNAME_ON_CREATE_INPUT: {
            return {
                ...state,
                currentDataOnButtonClick: {
                    ...state.currentDataOnButtonClick,
                    createDeck: {
                        deckName: action.inputValue,
                        cardsInDeck: state.currentDataOnButtonClick.createDeck.cardsInDeck
                    }
                }
            }
        }
        case SET_DATA_ON_SHUFFLE_BUTTON_CLICK: {
            return {
                ...state,
                currentDataOnButtonClick: {...state.currentDataOnButtonClick, shuffleDeckName: action.selectValue}
            }
        }
        case SET_DATA_ON_REMOVE_BUTTON_CLICK: {
            return {
                ...state,
                currentDataOnButtonClick: {...state.currentDataOnButtonClick, removeDeckName: action.selectValue}
            }
        }
        default:
            return state
    }
}

export const setDecks = (decks) => ({type: SET_DECKS, decks})
export const setCurrentDeck = (deck) => ({type: SET_CURRENT_DECK, deck})
export const setDataOnShowButtonClick = (selectValue) => ({type: SET_DATA_ON_SHOW_BUTTON_CLICK, selectValue})
export const setDataOnShuffleButtonClick = (selectValue) => ({type: SET_DATA_ON_SHUFFLE_BUTTON_CLICK, selectValue})
export const setDataOnRemoveButtonClick = (selectValue) => ({type: SET_DATA_ON_REMOVE_BUTTON_CLICK, selectValue})
export const setDataOnCreateButtonClick = (selectValue) => ({type: SET_DATA_ON_CREATE_BUTTON_CLICK, selectValue})
export const setDeckNameOnCreateInput = (inputValue) => ({type: SET_DECKNAME_ON_CREATE_INPUT, inputValue})

export const getDecks = () => async (dispatch) => {
    const decks = await deckAPI.getDecks()
    dispatch(setDecks(decks.data))
}

export const getCurrentDeck = (deckName) => async (dispatch) => {
    const deck = await deckAPI.getDeck(deckName)
    dispatch(setCurrentDeck(deck.data))
}

export const createDeck = (deckName, cardsInDeck) => async (dispatch) => {
    await deckAPI.createDeck(deckName, cardsInDeck)
    dispatch(getDecks())
}

export const shuffleDeck = (deckName) => async () => {
    await deckAPI.shuffleDeck(deckName)
}

export const removeDeck = (deckName) => async (dispatch) => {
    await deckAPI.deleteDeck(deckName)
    dispatch(getDecks())
}

export default decksReducer
