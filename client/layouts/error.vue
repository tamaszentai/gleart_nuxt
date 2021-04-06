<template>
  <div class="error">
    <div class="image-container">
      <h2><b>Page not found</b></h2>
      <h4>I'm so sorry</h4>
      <img src="~/static/error.png">
    </div>
  </div>
</template>

<style scoped>
.image-container {
  margin-top: 7rem;
  text-align: center;
}

.image-container img{
  display: block;
  margin: auto;
  width: 60%;
}

/* Extra small devices (phones, 576px and down) */
@media only screen and (max-width: 576px) {}

/* Small devices (portrait tablets and large phones, 576px and up) */
@media only screen and (min-width: 576px) {}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .image-container img{
    width: 50%;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .image-container img{
    width: 28%;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .image-container img{
    width: 18%;
  }
}
</style>
