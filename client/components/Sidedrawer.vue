<template>
  <div class="container">
    <div class="sidedrawer">
      <span class="material-icons" @click="toggleMenu(), $emit('stopScroll')"> close </span>
      <ul @click="toggleMenu(), $emit('stopScroll')">
        <li><NuxtLink to="/about"><h1>ABOUT</h1></NuxtLink></li>
        <li><NuxtLink to="/gallery"><h1>GALLERY</h1></NuxtLink></li>
        <li><NuxtLink to="/contact"><h1>CONTACT</h1></NuxtLink></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleMenu () {
      this.$store.commit('setSidedrawer')
    }
  }
}
</script>

<style scoped>
.container {
  position: absolute;
  transition: 0.5s;
}
.sidedrawer {
  transition: 0.5s;
  z-index: 100;
  background-color: rgba(0,0,0,0.7);
  height: 100vh;
  width: 70vw;
  margin: 0;
  padding: 0;
}

.material-icons {
  color: whitesmoke;
  cursor: pointer;
  font-size: 3rem;
  /* padding-left: 10rem; */
}

.material-icons:hover {
  width: 300px;
}

ul {
  list-style: none;
}

li {
  color: whitesmoke;
  padding-top: 2rem;
}

a {
  color: whitesmoke;
}
</style>
