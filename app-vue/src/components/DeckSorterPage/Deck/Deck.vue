<template>
    <EmptyDeck v-if="this.currentDeck().length === 0"/>
    <div v-else class="Deck">
        <Card v-for='card in currentDeck().cards'
              v-bind:key="currentDeck().cards.indexOf(card)"
              v-bind:url="card.cardUrl"/>
    </div>
</template>

<script>
    import Card from './Card/Card'
    import { mapActions, mapState } from 'vuex'
    import EmptyDeck from '../EmptyDeck/EmptyDeck'

    export default {
        name: 'Deck',
        components: {
            Card,
            EmptyDeck
        },
        methods: {
            ...mapState('decks', {
                currentDeck: state => state.currentDeck
            }),
            ...mapActions('decks', {
                getDeck: 'GET_CURRENT_DECK'
            }),
            refreshCurrentDeck() {
                let deckName = this.$route.params.deckName
                this.getDeck(deckName)
            }
        },
        mounted() {
            this.refreshCurrentDeck()
        },
        updated() {
            this.refreshCurrentDeck()
        }
    }
</script>

<style scoped>
    .Deck {
        grid-area: d;
        display: grid;
        grid-template-rows: repeat(5, 1fr);
        grid-template-columns: repeat(12, 1fr);
        background: #888888 url('/deck-sorter-background.jpg') no-repeat;
        background-size: 100%;
        padding: 15px 350px 0 350px;
    }

</style>