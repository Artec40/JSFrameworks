<template>
    <div class="Header">
        <div v-on:click="ChangeInfoToApi()" class="API">About
            API
        </div>
        <div v-on:click="ChangeInfoToApp()" class="APP">About APP</div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        name: 'Header',
        methods: {
            ...mapMutations('informer', {
                ChangeInfoToApp: 'CHANGE_INFO_TO_APP',
                ChangeInfoToApi: 'CHANGE_INFO_TO_API',
            })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .Header {
        grid-area: h;
        display: grid;
        grid-template-areas: 'api app';
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 1fr;
        background-color: #2B2628;
        color: #FFFFFF;
        align-items: center;
        text-align: center;
        padding: 0 30vw 0 30vw;
        font-size: 20px;
    }

    .API {
        grid-area: api;
        color: #FFFFFF;
        cursor: pointer;
    }

    .APP {
        grid-area: app;
        color: #FFFFFF;
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
</style>
