<template>
  <div class="container">
    <div
    class="gallery"
    v-for="picture in pictures"
    :key="picture.id">
      <img :src="require(`@/assets/images/${picture.image}`)">
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
  margin-top: 2rem;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  width: 95%;
}

.gallery img {
  width: 100%;
  padding: 0.2rem 0;
  display: block;
  margin: auto;
  }
</style>
