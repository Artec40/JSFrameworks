<template>
    <div class="ControlPanel">
        <DeckGetter/>
        <DeckCreater/>
        <DeckRemover/>
        <DeckSorter/>
    </div>
</template>

<script>
    import DeckCreater from './DeckCreater/DeckCreater'
    import DeckGetter from './DeckGetter/DeckGetter'
    import DeckRemover from './DeckRemover/DeckRemover'
    import DeckSorter from './DeckSorter/DeckSorter'

    export default {
        name: 'ControlPanel',
        components: {
            DeckGetter,
            DeckCreater,
            DeckRemover,
            DeckSorter
        }
    }
</script>

<style scoped>
    .ControlPanel{
        grid-area: cp;
        display:grid;
        grid-template-areas: 'dg dc ds dr';
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
</style>