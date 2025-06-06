<template>
  <div>

    <div>
      <div 
        v-for="(number, index) in numbers" 
        :class="['flis', { 'førstPåLinje': index % 3 === 0 }]" 
        @click="clickedNumber(index)"
      >
        {{ number !== null ? number : '' }}
      </div>
    </div>

    <div style="clear: both;">Antall trekk: {{ count }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const numbers = ref<(number | null)[]>([3, 5, 6, 8, 1, null, 2, 4, 7]);
    const count = ref(0);

    const clickedNumber = (index: number) => {
      count.value++;
      const blankIndex = findBlankIndex(index);
      if (blankIndex === null) return;
      // Bytt plass
      const temp = numbers.value[blankIndex];
      numbers.value[blankIndex] = numbers.value[index];
      numbers.value[index] = temp;
    };

    const findBlankIndex = (index: number): number | null => {
      const deltas = [-3, -1, 1, 3];
      for (const delta of deltas) {
        const newIndex = index + delta;
        if (newIndex < 0 || newIndex >= numbers.value.length) continue;
        if (numbers.value[newIndex] === null) {
          return newIndex;
        }
      }
      return null;
    };

    return {
      numbers,
      count,
      clickedNumber
    };
  }
});
</script>

<style scoped>
  p.feilmelding {
      color: red;
  }
  div.trekkteller {
      clear: left;
  }
  div.flis {
      color: blue;
      background: lightblue;
      padding: 18px;
      margin: 10px;
      border: solid green 7px;
      width: 30px;
      height: 30px;
      float: left;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      cursor: pointer;
      user-select: none;
  }
  div.førstPåLinje {
      clear: left;
  }
</style>