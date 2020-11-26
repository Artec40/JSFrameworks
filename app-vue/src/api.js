import * as axios from 'axios/index'

const instance = axios.create({
    baseURL: 'https://localhost:5001/api/',
    headers: {
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'content-type',
        'Access-Control-Allow-Credentials': 'true'
    }
})

export const deckAPI = {
    getDecks() {
        return instance.get('values')
    },

    getDeck(deckName) {
        return instance.get(`values/getDeck?deckName=${deckName}`)
    },

    createDeck(deckName, deckSize) {
        return instance.post('values?=&', {Name: deckName, Quantity: deckSize})
    },

    shuffleDeck(deckName) {
        return instance.put(`/values/fill${deckName}?deckName=${deckName}`)
    },

    deleteDeck(deckName) {
        return instance.delete(`values/delete${deckName}?deckName=${deckName}`)
    }
}