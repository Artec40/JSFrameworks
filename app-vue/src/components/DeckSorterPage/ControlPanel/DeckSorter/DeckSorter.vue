<template>
    <div class="DeckSorter">
        <div class="Title">
            <b>SHUFFLE DECK</b>
        </div>

        <div class="Selector">
            deck name: <select v-model="deckName">
            <option v-for="deck in decks()"
                    v-bind:key="decks().indexOf(deck)"
                    v-bind:value="deck">{{deck}}
            </option>
        </select>
        </div>

        <router-link to="/deck-shuffled">
            <button v-on:click="shuffleDeck(deckName)">Shuffle</button>
        </router-link>
    </div>
</template>

<script>
    import { mapActions, mapMutations, mapState } from 'vuex'

    export default {
        name: 'DeckSorter',
        methods: {
            ...mapState('decks', {
                decks: state => state.decks,
                deckNameInput: state => state.currentDataOnButtonClick.shuffleDeckName
            }),
            ...mapMutations('decks', {
                setDataOnShuffleButtonClick: 'SET_DATA_ON_SHUFFLE_BUTTON_CLICK'
            }),
            ...mapActions('decks', {
                shuffleDeck: 'SHUFFLE_DECK'
            })
        },
        computed: {
            deckName: {
                get() {
                    return this.deckNameInput()
                },
                set(name) {
                    this.setDataOnShuffleButtonClick(name)
                }
            }
        }
    }
</script>

<style scoped>
    .DeckSorter {
        grid-area: ds;
        background: url('../../../../../public/shuffle-deck.jpg') no-repeat;
        background-size: 100%;
        padding-top: 20px;
        text-align: center;
        color: #2B2628;
        font-size: 20px;
    }

    .Title {
        background: rgba(255, 255, 255, 0.7);
        height: 4vh;
        padding-top: 1vh;
    }

    .Selector {
        background: rgba(255, 255, 255, 0.7);
        padding-bottom: 10px;
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

</style>