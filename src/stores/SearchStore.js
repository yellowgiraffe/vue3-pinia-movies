import { defineStore } from 'pinia'
import { useMovieStore } from './MovieStore'
import { ref } from 'vue'

// Options API
// export const useSearchStore = defineStore('searchStore', {
//   state: () => ({
//     movies: [],
//     isLoading: false
//   }),
//   actions: {
//     async searchMovies(keyword) {
//       this.isLoading = true
//       const response = await fetch(`${import.meta.env.VITE_BASE_URL}search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${keyword}`)
//       const data = await response.json()
//       this.movies = data.results
//       this.isLoading = false
//     },
//     addToFavorite(movie) {
//       const movieStore = useMovieStore()
//       movieStore.movies.push({ ...movie, isWatched: false })
//       movieStore.activeTab = 1
//     }
//   }
// })

export const useSearchStore = defineStore('searchStore', () => {
  const isLoading = ref(false)
  const movies = ref([])

  const searchMovies = async (keyword) => {
    isLoading.value = true
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${keyword}`)
    const data = await response.json()
    movies.value = data.results
    isLoading.value = false
  }

  const addToFavorite = (movie) => {
    const movieStore = useMovieStore()
    movieStore.movies.push({ ...movie, isWatched: false })
    movieStore.activeTab = 1
  }

  return {
    isLoading, movies, searchMovies, addToFavorite
  }
})