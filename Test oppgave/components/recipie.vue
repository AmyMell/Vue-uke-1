<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="title">Tittel</label>
      <input id="title" v-model="title" required />
    </div>
    <div>
      <label for="tags">Tags</label>
      <input id="tags" v-model="tagsInput" required/>
    </div>
    <div>
      <label for="instructions">Instruksjoner</label>
      <input id="instructions" v-model="instructions" required/>
    </div>
    <IngredientListeEditor :ingredients="ingredients" @update-ingredients="updateIngredients" />
    
    <button type="submit">Legg til oppskrift</button>
  </form>
</template>

<script setup lang="ts">
const title = ref('')
const tagsInput = ref('')
const ingredients = ref<string[]>([])
const instructions = ref('')

import IngredientListeEditor from './ingridi.vue'


const emit = defineEmits(['submit-recipe'])


function updateIngredients(newIngredients: string[]) {
  ingredients.value = newIngredients
}

function submitForm() {
  const tags = tagsInput.value.split(',').map(t => t.trim()).filter(t => t)
  emit('submit-recipe', {
    title: title.value,
    tags,
    ingredients: ingredients.value,
    instructions: instructions.value
  })
}
</script>

<style scoped>
form {
  max-width: 500px;
  margin: 40px auto;
  padding: 32px;
  background: #f9fafb;
  border-radius: 14px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.07);
  display: flex;
  flex-direction: column;
  gap: 22px;
}

form > div {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

label {
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 2px;
  letter-spacing: 0.5px;
}

input,
textarea {
  padding: 10px 14px;
  border: 1px solid #d1d5db;
  border-radius: 7px;
  font-size: 1rem;
  background: #fff;
  transition: border 0.2s;
  resize: vertical;
}

input:focus,
textarea:focus {
  border-color: #3498db;
  outline: none;
}

button {
  background: #3498db;
  color: #fff;
  font-weight: 600;
  border: none;
  padding: 12px 0;
  border-radius: 7px;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: 10px;
  font-size: 1.1rem;
  letter-spacing: 0.5px;
}

button:hover {
  background: #217dbb;
}

::placeholder {
  color: #b0b8c1;
  opacity: 1;
}
</style>