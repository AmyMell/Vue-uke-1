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

