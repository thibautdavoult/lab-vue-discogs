<template>
<div class="container">
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{ albums.releases[0].artist }}
        </h1>
        <h2 class="subtitle">
          Releases list
        </h2>
      </div>
    </div>
  </section>

<div class="card" v-for="release in albums.releases">
<div class="card-content">
  <img :src="release.thumb" class="title">
  <p class="subtitle"><strong>
    {{ release.title }}</strong>
  </p>
  <p>
    Year: {{ release.year }}
  </p>
</div>
</div>
</div>

</template>

<script>

import api from '../api'

export default {
  data() {
    return {
      albums: [],
    }
  },
  created() {
      api.getAlbums(this.$route.params.id).then(albums => {
        this.albums = albums;
      });
    }
}


</script>
