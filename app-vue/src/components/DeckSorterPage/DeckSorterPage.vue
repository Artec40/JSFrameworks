<template>
    <div class="DeckSorter">
        <div class="Deck">Deck</div>
        <ControlPanel/>
    </div>
</template>

<script>
    import ControlPanel from './ControlPanel/ControlPanel'

    export default {
        name: 'DeckSorterPage',
        components: {
            ControlPanel
        }
    }
</script>

<style scoped>
    .DeckSorter {
        grid-area: dsp;
        display: grid;
        grid-template-areas: 'd' 'cp';
        grid-template-rows: 75vh 25vh;
        grid-template-columns: 1fr;
    }

    .Deck {
        grid-area: d;
        background: #888888 url('../../../public/deck-sorter-background.jpg') no-repeat;
        background-size: 100%;
    }
</style>