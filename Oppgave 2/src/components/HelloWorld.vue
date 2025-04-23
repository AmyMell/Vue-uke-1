<template>
  <div id="app">
    <div id="trafficLight" @click="changeLight">
      <div class="light" :style="{ backgroundColor: currentLightColor === 'red' ? 'red' : 'gray' }"></div>
      <div class="light" :style="{ backgroundColor: currentLightColor === 'yellow' ? 'yellow' : 'gray' }"></div>
      <div class="light" :style="{ backgroundColor: currentLightColor === 'green' ? 'green' : 'gray' }"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const currentLightColor = ref<'red' | 'yellow' | 'green'>('green');
    const changeLight = () => {
      if (currentLightColor.value === 'green') {
        currentLightColor.value = 'yellow';
      } else if (currentLightColor.value === 'yellow') {
        currentLightColor.value = 'red';
      } else if (currentLightColor.value === 'red') {
        currentLightColor.value = 'green';
      }
    };

    return {
      currentLightColor,
      changeLight,
    };
  },
});
</script>

<style>
#trafficLight {
  display: flex;
  flex-direction: column;
  width: 3rem;
  height: 10rem;
  background-color: black;
  padding: 1rem;
  gap: 1rem;
  cursor: pointer; 
}

div.light {
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
}
</style>