import { defineStore } from 'pinia'

export const useMovieStore = defineStore('movieStore', {
  state: () => ({
    movies: [],
    activeTab: 2
  }),
  getters: {
    watched: (state) => state.movies.filter((el) => el.isWatched),
  },
  actions: {
    setActiveTab(id) {
      this.activeTab = id
    },
    toggleWatched(id) {
      const idx = this.movies.findIndex((el) => el.id === id)
      this.movies[idx].isWatched = !this.movies[idx].isWatched
    },
    deleteFromFavorites(id) {
      this.movies = this.movies.filter((el) => el.id !== id)
    }
  }
})