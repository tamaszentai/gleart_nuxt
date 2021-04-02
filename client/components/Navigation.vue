<template>
<div>
  <b-navbar fixed toggleable="lg" type="dark" variant="dark" class="fixed-top">
    <b-navbar-brand to="/"><img src="~static/glealogo.png"></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/about">About</b-nav-item>
        <b-nav-item to="/gallery">Gallery</b-nav-item>
        <b-nav-item to="/contact">Contact</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="https://www.facebook.com/GLeArt-276683485725990" target="_blank"><font-awesome-icon :icon="['fab', 'facebook']"/>Facebook</b-nav-item>
        <b-nav-item href="https://www.instagram.com/insomnia_gleart" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']"/>Instagram</b-nav-item>
        <b-nav-item href="https://www.linkedin.com/in/leagondos/" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']"/>LinkedIn</b-nav-item>
        <b-nav-item href="https://www.artstation.com/glea" target="_blank"><font-awesome-icon :icon="['fab', 'artstation']"/>Artstation</b-nav-item>
        <b-nav-item href="https://www.tiktok.com/@nimphasylum" target="_blank"><font-awesome-icon :icon="['fab', 'tiktok']"/>TikTok</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<style scoped>
img {
  height: 3rem;
}

a {
  font-size: 1.2rem;
}
</style>
