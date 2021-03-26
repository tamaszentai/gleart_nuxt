<template>
  <div class="container">
    <div
    v-for="n in data"
    :key="n"
    class="wrapper">
    <div class="image-container">
      <img :src="`http://localhost:1337${n.picture.url}`">
    </div>
    <div class="text-container">
      {{n.biography}}
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      data: null
    }
  },
  async fetch () {
    this.data = await axios.get('http://localhost:1337/abouts').then(response => response.data)
  }
}
</script>

<style scoped>

.container {
}

.image-container {
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  overflow: hidden;
}
.image-container img {
  display: block;
  margin: auto;
  height: 100%;
}
.text-container {
  width: auto;
  padding: 2rem;
  font-size: 1rem;
  margin: auto;
}
</style>
