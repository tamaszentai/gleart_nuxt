<template>
  <div class="container">
    <h1>GALLERY</h1>
    <div
    class="gallery"
    v-for="picture in pictures"
    :key="picture.id"
    :picture="picture">
    <img :src="`http://localhost:1337${picture.image.url}`">
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      pictures: null
    }
  },
  async fetch () {
    this.pictures = await axios.get('http://localhost:1337/galleries').then(response => response.data)
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
}
.gallery img {
  width: 95%;
  padding: 0.2rem 0;
  display: block;
  margin: auto;
  }
</style>
