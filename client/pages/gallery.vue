<template>
  <div>
        <CoolLightBox :items="imagesUrl" :index="index" @close="index = null"/>
    <div
    class="gallery"
   >
    <div
    class="gallery-item"
     v-for="(image, imageIndex) in imagesThumbnail"
    :key="imageIndex"
    @click="index = imageIndex"
        >
      <nuxt-img :src="imagesSmall[imageIndex]" :alt="imagesAlt[imageIndex]" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
export default {
  components: {
    CoolLightBox
  },
  async fetch () {
    const response = await axios.get('https://gleart.ew.r.appspot.com/galleries')
    response.data.map((data) => {
      this.imagesUrl.push(data.picture.url)
      this.imagesAlt.push(data.alt)
      this.imagesThumbnail.push(data.picture.formats.thumbnail.url)
      this.imagesSmall.push(data.picture.formats.small.url)
      return data
    })
  },
  data () {
    return {
      imagesSmall: [],
      imagesThumbnail: [],
      imagesUrl: [],
      imagesAlt: [],
      index: null
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
  padding-top: 1rem;
  display:block;
  width: 100%;
  height: 25rem;
  object-fit: cover;
}

.blurry {
  filter: blur(8px);
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
}

/* Large devices (laptops/desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(23rem, 1fr));
    grid-gap: 1rem;
    max-width: 100%;
  }
}
</style>
