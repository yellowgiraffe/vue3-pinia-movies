import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// Options API
// export const useMovieStore = defineStore('movieStore', {
//   state: () => ({
//     movies: [],
//     activeTab: 2
//   }),
//   getters: {
//     watched: (state) => state.movies.filter((el) => el.isWatched),
//   },
//   actions: {
//     setActiveTab(id) {
//       this.activeTab = id
//     },
//     toggleWatched(id) {
//       const idx = this.movies.findIndex((el) => el.id === id)
//       this.movies[idx].isWatched = !this.movies[idx].isWatched
//     },
//     deleteFromFavorites(id) {
//       this.movies = this.movies.filter((el) => el.id !== id)
//     }
//   }
// })

export const useMovieStore = defineStore('movieStore', () => {
  const movies = ref([])
  const activeTab = ref(2)

  const watched = computed(() => 
    movies.value.filter((el) => el.isWatched)
  )

  const setActiveTab = (id) => {
    activeTab.value = id
  }
  const toggleWatched = (id) => {
    const idx = movies.value.findIndex((el) => el.id === id)
    movies.value[idx].isWatched = !movies.value[idx].isWatched
  }
  const deleteFromFavorites = (id) => {
    movies.value = movies.value.filter((el) => el.id !== id)
  }

  return {
    movies, activeTab, watched, setActiveTab, toggleWatched, deleteFromFavorites
  }
})
