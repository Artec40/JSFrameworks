<template>
    <div class="Informer">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'Informer',
        components: {}
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