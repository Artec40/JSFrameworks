<template>
  <div class="Header">
    <div class="API">About API</div>
    <div class="APP">About APP</div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {

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
  }

  .APP {
    grid-area: app;
  }
</style>
