<template>
    <div class='DeckCreater'>
        <div class='Title'>
            <b>CREATE DECK</b>
        </div>

        <div class='Selector'>
            deck name: <input v-model="deckName" type='text'/>
            cards in deck: <select v-model="cardsInDeck">
            <option>24</option>
            <option>32</option>
            <option>36</option>
            <option>52</option>
        </select>
        </div>
        <router-link to="/deck-created">
            <button v-on:click="createDeck({deckName,cardsInDeck})">Create</button>
        </router-link>
    </div>
</template>

<script>
    import { mapActions, mapMutations, mapState } from 'vuex'

    export default {
        name: 'DeckCreater',
        methods: {
            ...mapState('decks', {
                cardsInDeckInput: state => state.currentDataOnButtonClick.createDeck.cardsInDeck,
                deckNameInput: state => state.currentDataOnButtonClick.createDeck.deckName
            }),
            ...mapMutations('decks', {
                setDeckNameOnCreateInput: 'SET_DECKNAME_ON_CREATE_INPUT',
                setDataOnCreateButtonClick: 'SET_DATA_ON_CREATE_BUTTON_CLICK'
            }),
            ...mapActions('decks', {
                createDeck: 'CREATE_DECK'
            })
        },
        computed: {
            cardsInDeck: {
                get() {
                    return Number(this.cardsInDeckInput())
                },
                set(cards) {
                    this.setDataOnCreateButtonClick(cards)
                }
            },
            deckName: {
                get() {
                    return this.deckNameInput()
                },
                set(name) {
                    this.setDeckNameOnCreateInput(name)
                }
            }
        }
    }
</script>

<style scoped>
    .DeckCreater {
        grid-area: dc;
        background: url('../../../../../public/create-deck.jpg') no-repeat;
        background-size: 100%;
        padding-top: 20px;
        text-align: center;
        font-size: 20px;
        color: #2B2628;
    }

    .Title {
        background: rgba(255, 255, 255, 0.7);
        height: 4vh;
        padding-top: 1vh;

    }

    .Selector {
        padding-bottom: 10px;
        background: rgba(255, 255, 255, 0.7);
        margin-bottom: 15px;
    }

    select {
        font-size: 16px;
        border: none;
        outline: none;
    }

    select:hover {
        color: #D40000;
    }

    input {
        width: 100px;
        margin-right: 10px;
        border: none;
        outline: none;
        font-size: 16px;
    }

    input:hover {
        color: #D40000;
    }
</style>