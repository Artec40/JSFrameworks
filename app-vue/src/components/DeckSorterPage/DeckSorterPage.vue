<template>
    <div class="DeckSorter">
        <Deck/>
        <ControlPanel/>
    </div>
</template>

<script>
    import ControlPanel from './ControlPanel/ControlPanel'
    import Deck from './Deck/Deck'

    export default {
        name: 'DeckSorterPage',
        components: {
            ControlPanel,
            Deck
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
</style>