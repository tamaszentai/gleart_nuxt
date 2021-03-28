<template>
  <div class="app-container">
    <Appbar class="mobile-nav"/>
    <Nuxt />
  </div>
</template>

<style>
html, body {
  background-image: url("~assets/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: 50%;
  margin: 0;
  font-family: 'Texturina', serif;
}

.container {
  display: block;
  margin: auto;
  padding: auto;
}

.fixed {
  overflow: hidden;
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
@media only screen and (min-width: 1200px) {}

</style>
