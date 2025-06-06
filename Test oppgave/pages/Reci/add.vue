<template>
  <div>
    <h2>Legg til ny oppskrifter</h2>
    <RecipeForm @submit-recipe="handleAddRecipe" />
  </div>
     <h2><NuxtLink to="./recipes">Se oppskrifter</NuxtLink></h2>
</template>

<script setup lang="ts">
import { useRecipeStore } from '../../components/store'
import RecipeForm from '../../components/recipie.vue'

const store = useRecipeStore()
const router = useRouter()

function handleAddRecipe(recipe: any) {
  store.addRecipe(recipe)
  store.saveToStorage()
  router.push('./recipes')
}
</script>

<style scoped>


h2 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 28px;
  letter-spacing: 1px;
  font-size: 1.5rem;
}

a {
  color: #3498db;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
}

a:hover {
  color: #217dbb;
  text-decoration: underline;
}
</style>