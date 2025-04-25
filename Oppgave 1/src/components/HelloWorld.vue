<script setup lang="ts">
import { ref } from 'vue';

const guessNumber = ref<number | null>(null);
const guessNumberInput = ref<number | null>(null);
const secretNumber = ref<number>(0);

const Attempts = ref<number>(0);

function start() {
  guessNumber.value = null;
  guessNumberInput.value = null;
  secretNumber.value = Math.ceil(Math.random() * 100);
  Attempts.value = 0
}

function svar() {
  if (guessNumberInput.value !== null) {
    guessNumber.value = guessNumberInput.value;
    Attempts.value = Attempts.value + 1
  }
}


start();
</script>

<template>
  <div>
    <h2>Tipp-tallet-spillet</h2>
    
    <p v-if="guessNumber === null"></p>
    <p v-else>Du tippet {{ guessNumber }}.<br/> </p>
    
    <p v-if="guessNumber === null">Gjett et number </p>
    <p v-else-if="guessNumber === secretNumber">Rikitig svar</p>
    <p v-else-if="guessNumber < secretNumber">Du har tippet for lavt.</p>
    <p v-else-if="guessNumber > secretNumber">Du har tippet for høyt.</p>
    <p v-else>ikke en number</p>
    <p>Du har gjettet {{ Attempts }} ganger</p>
    <input type="text" v-model.number="guessNumberInput" />
    <button @click="svar">Tipp</button>
    <button @click="start">Start på nytt</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #6d6d6d;
}
</style>
