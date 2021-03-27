<template>
<div class="container">
  <header>
    <span class="material-icons" @click="toggleMenu(),$emit('stopScroll')" v-if="!getSidedrawer"> menu </span>
  </header>
   <div
   class="nav"
   v-for="n in about"
   :key="n.id"
   >
     <div class="image-container">
       <img :src="require(`@/assets/${n.image}`)">
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

.nav {
  position: absolute;
  margin-left: 5rem;
  display: inline-block;
  width: 20rem;
  background-color: rgba(0, 0, 0, .7);
  height: 38rem;
}
.end-of-nav {
  display: inline-block;
  width: 20rem;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  background-color: rgba(0, 0, 0, .7);
  height: 3rem;
}

.image-container {
  width: 14.05rem;
  height: 14.05rem;
  display: block;
  margin: auto;
  margin-top: 3rem;
  border-radius: 50%;
  overflow: hidden;
}

.image-container img {
  width: 100%;
}

ul {
  list-style: none;
  text-align: center;
  padding: 0;
}

li {
  padding: 2rem;
  font-size: 1.5rem;
}

a {
  color: whitesmoke;
  text-decoration: none;
}

/* Extra small devices (phones, 599px and down) */
@media only screen and (max-width: 599px) {
  .nav {
    display: none;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .nav {
    display: none;
  }
}

/* Medium devices (landscape tablets, 900px and up) */
@media only screen and (min-width: 900px) {
   .material-icons {
    display: none;
  }
  .nav {
    display: inline-block;
  }
  .image-container {
    width: 14.05rem;
    height: 14.05rem;
  }
}
</style>
