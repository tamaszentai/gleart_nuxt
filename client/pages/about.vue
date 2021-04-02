<template>
  <div class="about">
    <div
    v-for="n in about"
    :key="n.id"
    class="wrapper">
    <div class="image-container">
      <b-img-lazy :src="require(`@/static/${n.image}`)"></b-img-lazy>
    </div>
    <div class="text-container">
      <h2><i><b>Hello and welcome!</b></i></h2>
      <i>{{n.bio}}</i>
      <hr />
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
  margin-top: 4rem;
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
h2 {
  text-align: center;
}
.text-container {
  width: auto;
  padding: 2rem;
  font-size: 1rem;
  margin: auto;
}

/* Extra small devices (phones, 576px and down) */
@media only screen and (max-width: 576px) {
  .image-container {
    margin-top: 6rem;
  }
}

/* Small devices (portrait tablets and large phones, 576px and up) */
@media only screen and (min-width: 576px) {

}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .image-container {
    margin-top: 8rem;
    width: 30rem;
    height: 30rem;
  }
  .text-container {
    width: 80%;
  }

}
  /* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .image-container {
    border-radius: 0;
    margin-top: 10rem;
    width: 30rem;
    height: 30rem;
  }

  .image-container img {
    border-radius: 50%;
  }

  .text-container {
    margin-top: 6rem;
    width: 70%;
  }

  hr {
    margin-top: 5rem;
  }

}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .wrapper {
    display: flex;
    margin-top: 6rem;
  }

  .image-container {
    display: inline-block;
    border-radius: 0;
    margin-top: 3rem;
    width: 40rem;
    height: 40rem;
  }

  .image-container img {
    border-radius: 50%;
  }

  .text-container {
    display: inline-block;
    margin-top: 6rem;
    width: 30%;
  }

  hr {
    margin-top: 3rem;
  }
}

</style>
