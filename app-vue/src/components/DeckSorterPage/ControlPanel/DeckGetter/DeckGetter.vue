<template>
    <div class='DeckGetter'>
        <div class='Title'>
            <b>GET DECK</b>
        </div>

        <div class='Selector'>
            deck name: <select v-model="deckName">
            <option v-for="deck in decks()"
                    v-bind:key="decks().indexOf(deck)"
                    v-bind:value="deck">{{deck}}
            </option>
        </select>
        </div>

        <router-link :to="'/deck/'+deckName">
            <button>Show</button>
        </router-link>
    </div>
</template>

<script>

    import { mapMutations, mapState } from 'vuex'

    export default {
        name: 'DeckGetter',
        methods: {
            ...mapState('decks', {
                decks: state => state.decks,
                deckNameInput: state => state.currentDataOnButtonClick.showDeckName
            }),
            ...mapMutations('decks', {
                setDataOnShowButtonClick: 'SET_DATA_ON_SHOW_BUTTON_CLICK'
            })
        },
        computed: {
            deckName: {
                get() {
                    return this.deckNameInput()
                },
                set(name) {
                    this.setDataOnShowButtonClick(name)
                }
            }
        }
    }
</script>

<style scoped>
    .DeckGetter {
        grid-area: dg;
        background: #F0D4A4 url('../../../../../public/get-deck.jpg') no-repeat;
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