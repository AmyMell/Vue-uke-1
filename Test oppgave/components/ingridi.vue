<template>
  <div>
    <div v-for="(ingredient, index) in localIngredients" :key="index">
      <input v-model="localIngredients[index]" />
      <button @click="removeIngredient(index)">Fjern</button>
    </div>
    <button type="button" @click="addIngredient">Legg til ingrediens</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  ingredients: Array
})

const emit = defineEmits(['update-ingredients'])

const localIngredients = ref([...(props.ingredients ?? [])])

watch(localIngredients, (newVal) => {
  emit('update-ingredients', newVal)
}, { deep: true })

function addIngredient() {
  localIngredients.value.push('')
}

function removeIngredient(index: number) {
  localIngredients.value.splice(index, 1)
}
</script>