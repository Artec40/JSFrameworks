<template>
    <div id="app">
        <Header/>
        <Informer/>
        <SortStarter/>
        <DeckSorterPage/>
    </div>
</template>

<script>
    import Header from './components/Header/Header.vue'
    import Informer from './components/Informer/Informer'
    import SortStarter from './components/SortStarter/SortStarter'
    import DeckSorterPage from './components/DeckSorterPage/DeckSorterPage'

    export default {
        name: 'App',
        components: {
            DeckSorterPage,
            SortStarter,
            Informer,
            Header,
        }
    }
</script>

<style>
    body {
        margin: 0;
    }

    #app {
        display: grid;
        grid-template-areas: 'h' 'i' 'ss' 'dsp';
        grid-template-rows: 10vh 60vh 20vh 100vh;
        grid-template-columns: 1fr;
    }

    button {
        width: 250px;
        color: #FFFFFF;
        background: #2B2628;
        padding: .7em 1.5em;
        outline: none;
        border: none;
        font-size: 16px;
    }

    button:hover {
        background: #D40000;
    }

    button:active {
        background: #000000;
    }
</style>
