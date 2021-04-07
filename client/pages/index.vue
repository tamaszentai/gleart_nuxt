<template>
  <div class="index">
    <div class="logo-container">
      <b-img-lazy src="~static/logo.png"></b-img-lazy>
    </div>
    <div
    class="d-none preload"
    v-for="(data, dataIndex) in imagesSmall"
    :key="dataIndex">
    <img :src="data">
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async fetch () {
    const response = await axios.get('https://gleart.ew.r.appspot.com/galleries')
    response.data.map((data) => {
      return this.imagesSmall.push(data.picture.formats.small.url)
    })
  },
  data () {
    return {
      imagesSmall: []
    }
  }
}
</script>

<style scoped>

.logo-container img {
  margin-top: 5rem;
  display: block;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

/* Extra small devices (phones, 576px and down) */
@media only screen and (max-width: 576px) {}

/* Small devices (portrait tablets and large phones, 576px and up) */
@media only screen and (min-width: 576px) {}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .logo-container img {
    display: block;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5rem;
}
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .logo-container img {
    display: block;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5rem;
}
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .logo-container img {
    display: block;
    width: 30%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5rem;
}
}

</style>
