<script setup lang="ts">
import { computed } from 'vue';
import { formatContributionDate } from '../utils/dateUtils';

const props = defineProps<{
  level: number;
  count: number;
  date: Date;
}>();

const tooltipText = computed(() => {
  const formattedDate = formatContributionDate(props.date);
  const contributionText = props.count === 1 ? 'clicks' : 'click';
  return `${props.count} ${contributionText} on ${formattedDate}`;
});
</script>

<template>
  <div
    class="contribution-cell"
    :class="`level-${level}`"
    :title="tooltipText"
  />
</template>

<style scoped>
.contribution-cell {
  width: 10px;
  height: 10px;
  margin: 2px;
  border-radius: 2px;
  background-color: #161b22;
  cursor: pointer;
}

.level-0 { background-color: #161b22; }
.level-1 { background-color: #0e4429; }
.level-2 { background-color: #006d32; }
.level-3 { background-color: #26a641; }
.level-4 { background-color: #39d353; }

.contribution-cell:hover {
  border: 1px solid #7d8590;
}
</style>