let initialState = {
    decks: [
        {
            id: 1,
            name: '24deck',
            quantity: 24,
            cards: [
                {
                    name: 'nine clubs',
                    url: '/cards/nine-clubs'
                },
                {
                    name: 'ten clubs',
                    url: '/cards/ten-clubs'
                },
                {
                    name: 'jack clubs',
                    url: '/cards/jack-clubs'
                },
                {
                    name: 'queen clubs',
                    url: '/cards/queen-clubs'
                },
                {
                    name: 'king clubs',
                    url: '/cards/king-clubs'
                },
                {
                    name: 'ace clubs',
                    url: '/cards/ace-clubs'
                },
                {
                    name: 'nine diamonds',
                    url: '/cards/nine-diamonds'
                },
                {
                    name: 'ten diamonds',
                    url: '/cards/ten-diamonds'
                },
                {
                    name: 'jack diamonds',
                    url: '/cards/jack-diamonds'
                },
                {
                    name: 'queen diamonds',
                    url: '/cards/queen-diamonds'
                },
                {
                    name: 'king diamonds',
                    url: '/cards/king-diamonds'
                },
                {
                    name: 'ace diamonds',
                    url: '/cards/ace-diamonds'
                },
                {
                    name: 'nine hearts',
                    url: '/cards/nine-hearts'
                },
                {
                    name: 'ten hearts',
                    url: '/cards/ten-hearts'
                },
                {
                    name: 'jack hearts',
                    url: '/cards/jack-hearts'
                },
                {
                    name: 'queen hearts',
                    url: '/cards/queen-hearts'
                },
                {
                    name: 'king hearts',
                    url: '/cards/king-hearts'
                },
                {
                    name: 'ace hearts',
                    url: '/cards/ace-hearts'
                },
                {
                    name: 'nine spades',
                    url: '/cards/nine-spades'
                },
                {
                    name: 'ten spades',
                    url: '/cards/ten-spades'
                },
                {
                    name: 'jack spades',
                    url: '/cards/jack-spades'
                },
                {
                    name: 'queen spades',
                    url: '/cards/queen-spades'
                },
                {
                    name: 'king spades',
                    url: '/cards/king-spades'
                },
                {
                    name: 'ace spades',
                    url: '/cards/ace-spades'
                },
            ]
        }
    ]
}

const deckReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default deckReducer
