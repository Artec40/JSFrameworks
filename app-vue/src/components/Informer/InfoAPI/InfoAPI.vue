<template>
    <div>
        <div>API</div>
        <div class="APItext">api developed on .net c#
            <ul>requests:
                <li>get - api/values (получить список названий колод)</li>
                <li>get - api/values/getdeck (получить колоду по имени)</li>
                <li>post - api/values (создать именованную колоду карт)</li>
                <li>put - api/values/filldeckname (перетасовать колоду по имени)</li>
                <li>delete - api/values/deletedeckname (удалить колоду карт по имени)</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'InfoAPI'
    }
</script>

<style scoped>
    .APItext {
        font-style: normal;
        text-align: left;
        font-size: 22px;
        padding-left: 250px;
        padding-right: 1100px;
        letter-spacing: normal;
    }
</style>