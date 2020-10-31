<template>
    <div class="SortStarter">
        <button v-on:click="scrollToBottom">Sort the deck</button>
    </div>
</template>

<script>

    export default {
        name: 'SortStarter',
        methods: {
            scrollToBottom: () => {
                window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: 'smooth'
                })
            }
        }
    }
</script>

<style scoped>
    .SortStarter {
        display: grid;
        grid-area: ss;
        align-items: center;
        justify-items: center;
        background-color: #FFFFFF;
        color: #2B2628;
    }
</style>