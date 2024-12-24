<script setup lang="ts">
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
</script>

<template>
  <div class="month-labels w-full">
    <span v-for="month in months" :key="month" class="month-label flex-1">
      {{ month }}
    </span>
  </div>
</template>

<style scoped>
.month-labels {
  display: flex;
  margin-left: 20px;
  margin-bottom: 8px;
  color: #7d8590;
  font-size: 12px;
}

.month-label {
  /* width: calc((10px + 2px) * 4.345); Approximate width for each month */
  text-align: left;
}
</style>