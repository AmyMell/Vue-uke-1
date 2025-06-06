<template>
  <div class="recipe-card">
    <h3>{{ recipe?.title }}</h3>
    <div class="tags">
      <span v-for="tag in recipe?.tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
    <details>
      <summary>Ingredienser</summary>
      <ul>
        <li v-for="(ing, index) in recipe?.ingredients" :key="index">{{ ing }}</li>
      </ul>
    </details>
    <details>
      <summary>Instruksjoner</summary>
      <ol>
        <li v-for="(step, index) in recipe?.instructions" :key="index">{{ step }}</li>
      </ol>
    </details>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  recipe: Object
})
</script>

<style scoped>
.recipe-card {
  border: 1px solid #e0e4ea;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  padding: 28px 32px 20px 32px;
  margin-bottom: 28px;
  max-width: 540px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Segoe UI', Arial, sans-serif;
}

h3 {
  margin-top: 0;
  margin-bottom: 12px;
  color: #2c3e50;
  font-size: 1.5rem;
  letter-spacing: 0.5px;
}

.tags {
  margin-bottom: 18px;
}

.tag {
  background-color: #eaf6fb;
  color: #3498db;
  margin-right: 0.5em;
  padding: 0.22em 0.7em;
  border-radius: 6px;
  font-size: 0.98em;
  font-weight: 500;
  display: inline-block;
}

details {
  margin-bottom: 14px;
  background: #f7fafd;
  border-radius: 8px;
  padding: 8px 14px;
  border: 1px solid #e3eaf2;
}

summary {
  font-weight: 600;
  color: #217dbb;
  cursor: pointer;
  outline: none;
  margin-bottom: 6px;
  font-size: 1.08em;
}

ul, ol {
  margin: 0 0 0 18px;
  padding: 0;
}

li {
  margin-bottom: 4px;
  font-size: 1em;
  color: #34495e;
}
</style>