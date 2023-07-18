<script setup>
import { ref } from 'vue'
import { useSearchStore } from '../stores/SearchStore'
import Loader from './Loader.vue'
import MovieItem from './MovieItem.vue'

const searchStore = useSearchStore()

const searchText = ref('')

</script>

<template>
  <form class="search-form" @submit.prevent="searchStore.searchMovies(searchText)">
    <input
      v-model="searchText"
      type="text"
      placeholder="Search"
      class="search-input"
    />
    <span class="search-hint">Click enter to search</span>
  </form>
  <Loader v-if="searchStore.isLoading" />
  <div v-else>
    <MovieItem
      v-for="movie in searchStore.movies"
      :key="movie.id"
      :movie="movie"
    />
  </div>
</template>

<style scoped>
.search-form {
  margin-bottom: 40px;
}
.search-input {
  border: 1px solid #e7e7e7;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border-radius: 10px;
}

.search-hint {
  font-size: .7rem;
  padding-left: 10px;
  /* font-style: italic; */
  color: #949494;
}
</style>