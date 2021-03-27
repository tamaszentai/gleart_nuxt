<template>
  <div class="container">
    <div
    v-for="n in about"
    :key="n.id"
    class="wrapper">
    <div class="image-container">
      <img :src="require(`@/assets/${n.image}`)">
    </div>
    <div class="text-container">
      {{n.bio}}
    </div>
    </div>
  </div>
</template>

<script>
import about from '@/assets/about.js'
export default {
  data () {
    return {
      about
    }
  }
}
</script>

<style scoped>

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

/* Extra small devices (phones, 599px and down) */
@media only screen and (max-width: 599px) {
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {

}

/* Medium devices (landscape tablets, 900px and up) */
@media only screen and (min-width: 900px) {
  .image-container {
    display: none;
  }

  .text-container {
    margin-top: 10%;
    margin-left: 40%;
    width: 50%;
  }
}

</style>
