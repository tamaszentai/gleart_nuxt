<template>
  <v-card class="mx-auto overflow-hidden">
    <v-app-bar color="deep-purple" dark style="border-radius: 0">
      <v-app-bar-nav-icon @click="drawer = true" absolute></v-app-bar-nav-icon>
        <img class="logo" src="~assets/glealogo.png">
    </v-app-bar>

    <v-navigation-drawer dark v-model="drawer" absolute temporary height="100vh">
      <ul>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/gallery">Gallery</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        <img class="drawer-logo" src="~assets/glealogo.png">
      </ul>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null
  })
}
</script>

<style scoped>
a {
  color: whitesmoke;
  font-size: 2rem;
}

.logo {
  display: block;
  margin: auto;
  max-height: 40px;
  max-width: 40px;

}

.drawer-logo {
  display: block;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
}

li {
  text-align: center;
  padding: 2rem
}
</style>
