<template>
    <div class="Informer">
        <InfoAPP v-if="this.INFORMER_DATA === 'app'"/>
        <InfoAPI v-else-if="this.INFORMER_DATA === 'api'"/>
        <Title v-else/>
    </div>
</template>

<script>
    import Title from './Title/Title'
    import InfoAPP from './InfoAPP/InfoAPP'
    import InfoAPI from './InfoAPI/InfoAPI'
    import { mapGetters } from 'vuex'

    export default {
        name: 'Informer',
        components: {InfoAPI, InfoAPP, Title},
        computed: {
            ...mapGetters('informer',['INFORMER_DATA']),
        }
    }
</script>

<style scoped>
    .Informer {
        grid-area: i;
        color: #FFFFFF;
        background: #2B2628 url('../../../public/informer-background.jpg') no-repeat;
        font-size: 30px;
        letter-spacing: 1vw;
        font-style: italic;
        text-align: center;
        padding-top: 50px;
    }
</style>