<template>
    <div class="Card"
         :style="{ background: `url(${url}) center/cover no-repeat`}">
    </div>
</template>

<script>

    export default {
        name: 'Card',
        props: {url: String}
    }
</script>

<style scoped>
    .Card {
        background: no-repeat;
        width: 85px;
        height: 130px;
    }
</style>