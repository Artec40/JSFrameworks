<template>
    <div class='DeckCreater'>
        <div class='Title'>
            <b>CREATE DECK</b>
        </div>

        <div class='Selector'>
            deck name: <input type='text'/>
            cards in deck: <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select>
        </div>

        <div>
            <button>Create</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DeckCreater'
    }
</script>

<style scoped>
    .DeckCreater {
        grid-area: dc;
        background: url('../../../../../public/create-deck.jpg') no-repeat;
        background-size: 100%;
        padding-top: 20px;
        text-align: center;
        font-size: 20px;
        color: #2B2628;
    }

    .Title {
        background: rgba(255, 255, 255, 0.7);
        height: 4vh;
        padding-top: 1vh;

    }

    .Selector {
        padding-bottom: 10px;
        background: rgba(255, 255, 255, 0.7);
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

    input {
        width: 100px;
        margin-right: 10px;
        border: none;
        outline: none;
        font-size: 16px;
    }
    input:hover{
        color:#D40000;
    }
</style>