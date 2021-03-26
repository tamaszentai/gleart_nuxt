<template>
  <header>
    <span class="material-icons" @click="toggleMenu(),$emit('stopScroll')" v-if="!getSidedrawer"> menu </span>
  </header>
</template>

<script>
export default {
  methods: {
    toggleMenu () {
      this.$store.commit('setSidedrawer')
    }
  },
  computed: {
    getSidedrawer () {
      return this.$store.getters.getSidedrawer
    }
  }
}
</script>

<style scoped>
header {
  background-color: rgba(0, 0, 0, 0.7);
  height: 3rem;
}
.material-icons {
  color: whitesmoke;
  cursor: pointer;
  font-size: 3rem;
}
h1 {
  color: white;
}
</style>
