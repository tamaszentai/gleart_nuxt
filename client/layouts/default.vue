<template>
<v-app>
  <div class="app-container">
    <Appbar class="d-md-and-down"/>
    <Nuxt />
  </div>
  </v-app>
</template>

<style>
#app {
  background-image: url("~assets/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: 50%;
  margin: 0;
  font-family: 'Texturina', serif;
  min-height: 100%;
}

.container {
  display: block;
  margin: auto;
  padding: auto;
}

.fixed {
  overflow: hidden;
}
</style>
