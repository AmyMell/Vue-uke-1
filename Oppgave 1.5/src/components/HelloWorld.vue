<script setup lang="ts">
import { ref, computed } from 'vue';


const generateSecretNumber = (): number => Math.ceil(Math.random() * 100);
const guessNumber = ref<number | null>(null);
const guessNumberInput = ref<number | null>(null);
const secretNumber = ref<number>(generateSecretNumber());
const Attempts = ref<number>(0);

const Restart = () => {
  guessNumber.value = null;
  guessNumberInput.value = null;
  secretNumber.value = generateSecretNumber();
  Attempts.value = 0;
};

const Svar = () => {
  if (guessNumberInput.value !== null) {
    guessNumber.value = guessNumberInput.value;
    Attempts.value += 1;
  }
};

const Check = computed(() => {
  if (guessNumber.value === null) {
    return "Gjett et tall";
  } else if (guessNumber.value === secretNumber.value) {
    return "Riktig svar!";
  } else if (guessNumber.value < secretNumber.value) {
    return "Du har tippet for lavt.";
  } else if (guessNumber.value > secretNumber.value) {
    return "Du har tippet for høyt.";
  }
});
</script>

<template>
  <div>
    <h2>Tipp-tallet-spillet</h2>
    <p v-show="guessNumber != null">Du tippet {{ guessNumber }}.<br/> </p>   
    <p>{{ Check }}</p>
    <input type="number" v-model.number="guessNumberInput" />
    <button @click="Svar">Tipp</button>
    <button @click="Restart">Start på nytt</button>
  </div>
</template>