<template>
  <div class="container">
    <div class="logo-container">
      <img src="~assets/logo.png">
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.logo-container {
  margin-top: 5rem;
}

.logo-container img {
  display: block;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

/* Extra small devices (phones, 599px and down) */
@media only screen and (max-width: 599px) {}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {}
  .logo-container {
  margin-top: 0rem;
}
/* Medium devices (landscape tablets, 900px and up) */
@media only screen and (min-width: 900px) {
  .logo-container {
  margin-top: 0rem;
}
  .logo-container img {
  display: block;
  width: 35%;
  margin-left: 40%;
  margin-right: auto;
  margin-top: -5rem;
}
}

/* Large devices (laptops/desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {}

</style>
