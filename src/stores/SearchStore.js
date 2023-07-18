import { defineStore } from 'pinia'

export const useSearchStore = defineStore('searchStore', {
  state: () => ({
    movies: [],
    isLoading: false
  }),
  actions: {
    async searchMovies(keyword) {
      this.isLoading = true
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${keyword}`)
      const data = await response.json()
      this.movies = data.results
      this.isLoading = false
    }
  }
})

// https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=API_KEY