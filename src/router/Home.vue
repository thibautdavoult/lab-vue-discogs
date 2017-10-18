<template>
  <div>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{ msg }}
        </h1>
        <h2 class="subtitle">
          Search for an album
        </h2>
      </div>
    </div>
  </section>
  <section class="content">

  <search-bar></search-bar>

</section>
</div>

</template>


<script>

import SearchBar from "../components/Searchbar"

export default {
  name: 'Home',
  data () {
    return {
      msg: `WELCOME TO THIBAUT'S DISCOGS SEARCH`,
    }
  },
  components: {
    SearchBar
  }
}
</script>
