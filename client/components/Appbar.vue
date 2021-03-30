<template>
<v-container>
    <v-app-bar
   class="d-md-none"
    app
    sticky
    dark
    style="border-radius: 0">
      <v-app-bar-nav-icon @click="drawer = true" absolute></v-app-bar-nav-icon>
        <img class="logo" src="~assets/glealogo.png">
    </v-app-bar>
    <v-navigation-drawer
    class="d-md-none"
    app
    dark
    v-model="drawer"
    height=100vh>
        <v-list-item><NuxtLink to="/about">About</NuxtLink></v-list-item>
        <v-list-item><NuxtLink to="/gallery">Gallery</NuxtLink></v-list-item>
        <v-list-item><NuxtLink to="/contact">Contact</NuxtLink></v-list-item>
        <div class="social-container">
          <a
                href="https://www.facebook.com/GLeArt-276683485725990"
                target="_blank"
                ><v-icon x-large color="white" class="mx-10">fab fa-facebook</v-icon></a>
                 <a
                href="https://www.instagram.com/insomnia_gleart"
                target="_blank"
                ><v-icon x-large color="white" class="mx-10">fab fa-instagram</v-icon></a>
        </div>
        <img class="drawer-logo" src="~assets/glealogo.png">
    </v-navigation-drawer>
</v-container>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    fab: false
  }),
  methods: {
    onScroll (e) {
      if (typeof window === 'undefined') {
        const top = window.pageYOffset || e.target.scrollTop || 0
        this.fab = top > 20
      }
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  }
}
</script>

<style scoped>
a  {
  font-size: 1.5rem;
  text-decoration: none;
}

a.nuxt-link-active {
  font-size: 2rem;
  color: black;
  text-shadow: rgb(121, 117, 117) 2px 2px 2px;
  text-decoration: underline;
}

.logo {
  display: block;
  margin: auto;
  max-height: 40px;
  max-width: 40px;

}

.drawer-logo {
  display: block;
  margin-top: 4rem;
  margin-left: auto;
  margin-right: auto;
}

.v-application a {
  color: whitesmoke;
}

.v-list-item {
  padding: 2rem;
  text-align: center;
  display: block;
}

.social-container {
  margin-top: 4rem;
  text-align: center;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}
</style>
