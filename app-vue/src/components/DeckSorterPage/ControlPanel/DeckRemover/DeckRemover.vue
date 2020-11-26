<template>
    <div class="DeckRemover">
        <div class="Title">
            <b>REMOVE DECK</b>
        </div>

        <div class="Selector">
            deck name: <select v-model="deckName">
            <option v-for="deck in decks()"
                    v-bind:key="decks().indexOf(deck)"
                    v-bind:value="deck">{{deck}}
            </option>
        </select>
        </div>

        <router-link to="/deck-removed">
            <button v-on:click="removeDeck(deckName)">Remove</button>
        </router-link>
    </div>
</template>

<script>
    import { mapActions, mapMutations, mapState } from 'vuex'

    export default {
        name: 'DeckRemover',
        methods: {
            ...mapState('decks', {
                decks: state => state.decks,
                deckNameInput: state => state.currentDataOnButtonClick.removeDeckName
            }),
            ...mapMutations('decks', {
                setDataOnRemoveButtonClick: 'SET_DATA_ON_REMOVE_BUTTON_CLICK'
            }),
            ...mapActions('decks', {
                removeDeck: 'REMOVE_DECK'
            })
        },
        computed: {
            deckName: {
                get() {
                    return this.deckNameInput()
                },
                set(name) {
                    this.setDataOnRemoveButtonClick(name)
                }
            }
        }
    }
</script>

<style scoped>
    .DeckRemover {
        grid-area: dr;
        background: url('../../../../../public/delete-deck.jpg') no-repeat;
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