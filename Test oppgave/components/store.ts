
type Recipe = {
  id?: number
  title: string
  tags: string[]
}

export const useRecipeStore = defineStore('recipe', {
  state: () => ({
    recipes: [] as Recipe[],
    searchQuery: '',
    activeTab: 'recipes'
  }),
  getters: {
    filteredRecipes: (state) => {
      if (!state.searchQuery) return state.recipes
      const q = state.searchQuery.toLowerCase()
      return state.recipes.filter(r => r.title.toLowerCase().includes(q))
    },
    recipeCount: (state) => state.recipes.length,
    tags: (state) => {
      const set = new Set()
      state.recipes.forEach(recipe => {
        recipe.tags.forEach((tag: unknown) => set.add(tag))
      })
      return Array.from(set)
    }
  },
  actions: {
    addRecipe(recipe: Recipe): void {
      recipe.id = Date.now()
      this.recipes.push(recipe)
    },
    setActiveTab(tab: string) {
      this.activeTab = tab
    },
    setSearchQuery(query: string) {
      this.searchQuery = query
    },
    loadFromStorage() {
      const data = localStorage.getItem('recipes')
      if (data) this.recipes = JSON.parse(data)
    },
    saveToStorage() {
      localStorage.setItem('recipes', JSON.stringify(this.recipes))
    }
  }
})