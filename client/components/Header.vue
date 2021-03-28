<template>
<div class="container">
   <div class="nav">
     <div class="image-container">
       <img src="@/assets/glealogo.png">
     </div>
      <ul>
        <li><NuxtLink to="/about">ABOUT</NuxtLink></li>
        <li><NuxtLink to="/gallery">GALLERY</NuxtLink></li>
        <li><NuxtLink to="/contact">CONTACT</NuxtLink></li>
      </ul>
      <div class="end-of-nav"></div>
    </div>
  </div>
</template>

<script>
import about from '@/assets/about.js'
export default {
  data () {
    return {
      about
    }
  },
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
