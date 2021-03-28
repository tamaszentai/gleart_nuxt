<template>
<div class="container">
  <header>
    <span class="material-icons" @click="toggleMenu(),$emit('stopScroll')" v-if="!getSidedrawer"> menu </span>
  </header>
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
  top: 0;
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
  display: block;
  margin: auto;
  margin-top: 3rem;
}

.image-container img {
  margin-left: auto;
  margin-right: auto;
  padding-top: 5rem;
  display: block;
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
   header {
    display: none;
  }
  .nav {
    display: inline-block;
    width: 15rem;
    margin-left: 2rem;
  }

  .end-of-nav {
    width: 15rem;
    margin-top: 2.25rem;
  }
  .image-container {
    width: 14.05rem;
    height: 14.05rem;
  }

  li {
    font-size: 1rem;
  }
}

/* Large devices (laptops/desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  header {
    display: none;
  }
 .nav {
  position: absolute;
  top: 0;
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
  margin-top: 0rem;
}

.image-container {
  display: block;
  margin: auto;
  margin-top: 3rem;
}

.image-container img {
  margin-left: auto;
  margin-right: auto;
  padding-top: 5rem;
  display: block;
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
}
</style>
