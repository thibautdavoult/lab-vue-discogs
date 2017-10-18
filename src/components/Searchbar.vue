<template>
<div>
<div class="container">
  <div class="field">
    <label class="label">Search for an Artist
      <div class="control">
        <input class="input" type="text" placeholder="Text input" v-model="query">
      </div>
    </label>
  </div>
  <div class="field is-grouped">
    <div class="control">
      <button class="button is-link" @click="searchArtists">Submit</button>
    </div>
  </div>
</div>
<div>
  <p>Search results:</p>
    <div v-for="artist in artists"><artist-thumbnail :artist="artist"></artist-thumbnail></div>
</div>

</div>
</template>


<script>

import api from '../api'
import ArtistThumbnail from '../components/ArtistThumbnail'

export default {
  data() {
    return {
      query: '',
      artists: []
    }
  },
  methods: {
    searchArtists() {
      api.getArtists(this.query).then(artist => {
        this.artists = artist;
      });
    }
  },
  components: {
    ArtistThumbnail
  }
}

</script>
