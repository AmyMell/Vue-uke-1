
export interface Recipe {
  id: number
  title: string
  description: string

}

export const useRecipeStore = defineStore('recipe', () => {
  const recipes = ref<Recipe[]>([])
  const searchQuery = ref('')

  function loadFromStorage() {
    const data = localStorage.getItem('recipes')
    if (data) {
      recipes.value = JSON.parse(data)
    }
  }

  function saveToStorage() {
    localStorage.setItem('recipes', JSON.stringify(recipes.value))
  }

  function addRecipe(recipe: Recipe) {
    recipe.id = Date.now()
    recipes.value.push(recipe)
  }

  function setSearchQuery(query: string) {
    searchQuery.value = query
  }

  const filteredRecipes = computed(() =>
    recipes.value.filter(r =>
      r.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  )

  return {
    recipes,
    searchQuery,
    filteredRecipes,
    loadFromStorage,
    saveToStorage,
    addRecipe,
    setSearchQuery,
  }
})