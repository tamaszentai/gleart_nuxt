<template>
  <div class="app-container">
    <Sidedrawer v-if="getSidedrawer" @stopScroll="this.setBody"/>
    <Header @stopScroll="this.setBody"/>
    <Nuxt />
  </div>
</template>

<script>
export default {
  computed: {
    getSidedrawer () {
      return this.$store.getters.getSidedrawer
    }
  },
  methods: {
    setBody () {
      const body = document.body
      if (this.getSidedrawer === true) {
        body.classList.add('fixed')
      } else {
        body.classList.remove('fixed')
      }
    }
  }
}
</script>

<style>
html, body {
  background-image: url("~assets/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: 50%;
  margin: 0;
}

.fixed {
  overflow: hidden;
}
</style>
