<template>
    <div class="DeckRemover">
        <div class="Title">
            <b>REMOVE DECK</b>
        </div>

        <div class="Selector">
            deck name: <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select>
        </div>

        <div>
            <button>Remove</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DeckRemover'
    }
</script>

<style scoped>
    .DeckRemover{
        grid-area: dr;
        background: url('../../../../../public/delete-deck.jpg') no-repeat;
        background-size: 100%;
        padding-top: 20px;
        text-align: center;
        color: #2B2628;
        font-size: 20px;
    }

    .Title {
        background: rgba(255, 255, 255, 0.7);
        height: 4vh;
        padding-top: 1vh;
    }

    .Selector{
        background: rgba(255, 255, 255, 0.7);
        padding-bottom: 10px;
        margin-bottom: 15px;
    }

    select {
        font-size: 16px;
        border: none;
        outline: none;
    }
    select:hover{
        color:#D40000;
    }

</style>