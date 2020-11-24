<template>
    <div class="DeckSorter">
        <router-view></router-view>
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
</style>