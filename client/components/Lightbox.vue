<template>
  <div v-if="toggle">
    <div class="backdrop"></div>
    <div class="lightbox"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      toggle: false
    }
  }
}
</script>

<style>
body {
  overflow: hidden;
  /* position: fixed; */
}
.backdrop {
  margin-top: -8rem;
  position: fixed;
  height: 100vh;
  width: 100%;
  background-color: rgba(255,255,255,.5);
  z-index: 1000;
}
</style>
