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