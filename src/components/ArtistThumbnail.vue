<template>
  <div class="container">
  <div class="card">
  <div class="card-content">
    <img :src="artist.thumb" class="title">
    <p class="subtitle">
      {{ artist.title }}
    </p>
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <span>
        <router-link :to="'artist/' + artist.id">View albums</router-link>
      </span>
    </p>
  </footer>
  </div>
  </div>
</template>

<script>

export default {
  props: ['artist'],
}

</script>
