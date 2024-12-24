<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  years: number[];
  modelValue: number;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void;
}>();

const isOpen = ref(false);

function selectYear(year: number) {
  emit('update:modelValue', year);
  isOpen.value = false;
}
</script>

<template>
  <div class="year-selector fixed ">
    <button @click="isOpen = !isOpen" class="year-button">
      {{ props.modelValue }}
      <span class="arrow" :class="{ 'arrow-up': isOpen }">▼</span>
    </button>
    <div v-if="isOpen" class="year-dropdown">
      <button
        v-for="year in props.years"
        :key="year"
        @click="selectYear(year)"
        class="year-option"
        :class="{ active: year === props.modelValue }"
      >
        {{ year }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.year-selector {
  position: relative;
  display: inline-block;
}

.year-button {
  background-color: #21262d;
  border: 1px solid #30363d;
  color: #c9d1d9;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.year-button:hover {
  background-color: #30363d;
}

.arrow {
  font-size: 10px;
  transition: transform 0.2s;
}

.arrow-up {
  transform: rotate(180deg);
}

.year-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 4px;
  background-color: #161b22;
  border: 1px solid #30363d;
  border-radius: 6px;
  overflow: hidden;
  z-index: 10;
}

.year-option {
  display: block;
  width: 100%;
  padding: 8px 16px;
  border: none;
  background: none;
  color: #c9d1d9;
  text-align: left;
  cursor: pointer;
}

.year-option:hover {
  background-color: #30363d;
}

.year-option.active {
  background-color: #1f6feb;
  color: white;
}
</style>