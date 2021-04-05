<template>
  <div>
    <div
    class="gallery"
   >
    <div
    class="gallery-item"
     v-for="data in gallery"
    :key="data.id">
      <b-img-lazy :src="data.picture.url" :alt="data.alt"></b-img-lazy>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async fetch () {
    const response = await axios.get('https://gleart.ew.r.appspot.com/galleries')
    this.gallery = response.data
  },
  data () {
    return {
      gallery: []
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
}

.gallery {
  margin-top: 6rem;
  margin-left: auto;
  margin-right: auto;
  width: 95%;
}

.gallery img {
  width: 100%;
  padding: 0.2rem 0;
  margin: auto;
  }

  /* Extra small devices (phones, 599px and down) */
@media only screen and (max-width: 599px) {}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    grid-gap: 1rem;
    max-width: 100%;
    margin-top: 8rem;

  }

  .gallery img {
    display:block;
    width: 100%;
    height: 20rem;
    object-fit: cover;
  }
}

/* Large devices (laptops/desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(23rem, 1fr));
    grid-gap: 1rem;
    max-width: 100%;
  }

  .gallery img {
    display:block;
    width: 100%;
    height: 25rem;
    object-fit: cover;
  }
}
</style>
