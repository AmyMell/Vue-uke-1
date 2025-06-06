<template>
  <div>
    <input v-model="searchQuery" placeholder="Søk" />
    <div class="recipe-list">
      <RecipeCard v-for="recipe in filteredRecipes" :key="recipe.id" :recipe="recipe" />
    </div>
  </div>
     <h2><NuxtLink to="./add">Legg til ny oppskrifter</NuxtLink></h2>
</template>

<script setup lang="ts">
import { useRecipeStore } from '../../components/store'
import RecipeCard from '../../components/recipinfo.vue'


const store = useRecipeStore()
store.loadFromStorage()

const searchQuery = computed({
  get: () => store.searchQuery,
  set: (val) => store.setSearchQuery(val)
})

const filteredRecipes = computed(() => store.filteredRecipes)
</script>

<style scoped>
.recipe-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 1rem;
}

input[type="text"], input[type="search"], input {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 350px;
  box-sizing: border-box;
}

h2 {
  text-align: center;
  margin-top: 2rem;
  font-size: 1.2rem;
}

a {
  color: #42b983;
  text-decoration: none;
  transition: color 0.2s;
}
a:hover {
  color: #2c8f6b;
}
</style>