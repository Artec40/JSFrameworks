<template>
    <div class="Deck">
        <Card v-for='card in cards' v-bind:key="card.id" v-bind:url="card.url"/>
    </div>
</template>

<script>
    import Card from './Card/Card'

    export default {
        name: 'Deck',
        components: {
            Card
        },
        computed: {
            cards() {
                return this.$store.state.decks[0].cards
            }
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