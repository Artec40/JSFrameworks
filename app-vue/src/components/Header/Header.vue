<template>
    <div class="Header">
        <router-link :to="{ name: 'api-description'}">
            <div class="API">About API</div>
        </router-link>
        <router-link :to="{ name: 'app-description'}">
            <div class="APP">About APP</div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        props: {}
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
    }

    .APP {
        grid-area: app;
        color: #FFFFFF;
    }

    a {
        text-decoration: none;
    }
</style>
