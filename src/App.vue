<script setup>
import { useMovieStore } from './stores/MovieStore'
import MovieItem from './components/MovieItem.vue'
import SearchTab from './components/SearchTab.vue'

const movieStore = useMovieStore()
const setTab = (id) => {
  movieStore.setActiveTab(id)
}
</script>

<template>
  <main>
    <header class="header">
      <img src="/logo.svg" alt="logo" class="header-logo" />
    </header>
    <div class="tabs">
      <button
        :class="['btn', { btn_green: movieStore.activeTab === 1 }]"
        @click="setTab(1)"
      >
        Favorite
      </button>
      <button
        :class="['btn', { btn_green: movieStore.activeTab === 2 }]"
        @click="setTab(2)"
      >
        Search
      </button>
    </div>
    <div class="movies" v-if="movieStore.activeTab === 1">
      <div>
        <h3>Watched (count: {{ movieStore.watched.length }})</h3>
        <MovieItem
          v-for="movie of movieStore.watched"
          :key="movie.id"
          :movie="movie" />
      </div>
      <h3>All (count: {{ movieStore.movies.length }})</h3>
      <MovieItem
        v-for="movie of movieStore.movies"
        :key="movie.id"
        :movie="movie" />
    </div>
    <div class="search" v-else>
      <SearchTab />
    </div>
  </main>
</template>

<style lang="css">
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.header-logo {
  max-width: 150px;
  margin-right: 10px;
}

.btn {
  border: none;
  width: 100px;
  height: 40px;
  font-size: 14px;
  margin: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  background: #efefef;
}

.btn:hover {
  opacity: 0.7;
}

.btn_green {
  background: #37df5c;
  color: #ffffff;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
</style>
