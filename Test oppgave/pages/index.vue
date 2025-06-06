<template>
  <div>
    <h1>Onkel Dags oppskrifter</h1>
    <nav>
      <NuxtLink to="./Reci/recipes">Oppskrifter</NuxtLink>
      <NuxtLink to="./Reci/add">Legg til ny oppskrift</NuxtLink>
    </nav>
    <NuxtPage />
  </div>
</template>
<style scoped>
div {
  max-width: 600px;
  margin: 40px auto;
  padding: 32px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  font-family: 'Segoe UI', Arial, sans-serif;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 32px;
  letter-spacing: 1px;
}

nav {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 32px;
}

nav a {
  text-decoration: none;
  color: #3498db;
  font-weight: 600;
  padding: 8px 20px;
  border-radius: 8px;
  transition: background 0.2s, color 0.2s;
}

nav a:hover {
  background: #3498db;
  color: #fff;
}
</style>