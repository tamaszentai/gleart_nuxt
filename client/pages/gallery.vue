<template>
  <div class="container">
    <div
    class="gallery"
   >
    <div
    class="gallery-item"
     v-for="picture in pictures"
    :key="picture.id">
      <img :src="require(`@/static/gallery/${picture.image}`)" alt:picture.alt>
      </div>
    </div>
  </div>
</template>

<script>
import gallery from '@/assets/picturesData.js'
export default {
  data () {
    return {
      pictures: gallery
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
}

.gallery {
  margin-top: 4rem;
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

/* Medium devices (landscape tablets, 900px and up) */
@media only screen and (min-width: 900px) {
     .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    grid-gap: 1rem;
    max-width: 60%;
    margin-left: 33%;
  }

  .gallery img {
    display:block;
    margin:auto;
    width: 100%;
    height: 15rem;
    object-fit: cover;
  }
}

/* Large devices (laptops/desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    grid-gap: 1rem;
    max-width: 60%;
    margin-left: 30%;
  }

  .gallery img {
    display:block;
    margin:auto;
    width: 100%;
    height: 15rem;
    object-fit: cover;
  }
}
</style>
