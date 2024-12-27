<script setup lang="ts">
import { computed, ref, watch } from 'vue';
// @ts-ignore
import ContributionCell from './ContributionCell.vue';
// @ts-ignore
import YearSelector from './YearSelector.vue';
// @ts-ignore
import MonthLabels from './MonthLabels.vue';
import { generateDatesForYear, getContributionLevel, getAvailableYears } from '../utils/dateUtils';
import type { ContributionDay } from '../types/contribution';

const {contributions, title = "cliks"} = defineProps<{
  contributions?: { createdAt: string; }[],
  title?: string
}>();

const selectedYear = ref(new Date().getFullYear());

const availableYears = computed(() => getAvailableYears(contributions));

// Watch for changes in contributions to update selectedYear if needed
watch(() => contributions, (newContributions) => {
  const years = getAvailableYears(newContributions);
  if (!years.includes(selectedYear.value)) {
    selectedYear.value = years[0] || new Date().getFullYear();
  }
}, { deep: true });

const filteredContributions = computed(() => {
  return contributions?.filter(contribution => 
    new Date(contribution.createdAt).getFullYear() === selectedYear.value
  );
});

const contributionMap = computed(() => {
  const map = new Map<string, number>();
  filteredContributions.value?.forEach(contribution => {
    const date = contribution.createdAt.split('T')[0];
    map.set(date, (map.get(date) || 0) + 1);
  });
  return map;
});

const contributionDays = computed(() => {
  const dates = generateDatesForYear(selectedYear.value);
  return dates.map((date: any) => {
    const dateStr = date.toISOString().split('T')[0];
    const count = contributionMap.value.get(dateStr) || 0;
    return {
      date,
      count,
      level: getContributionLevel(count)
    };
  });
});

const weeks = computed(() => {
  const result: ContributionDay[][] = [];
  let week: ContributionDay[] = [];
  
  contributionDays.value.forEach((day: any, index: number) => {
    week.push(day);
    if (week.length === 7 || index === contributionDays.value.length - 1) {
      result.push(week);
      week = [];
    }
  });
  
  return result;
});

const totalContributions = computed(() => 
  Array.from(contributionMap.value.values()).reduce((sum, count) => sum + count, 0)
);
</script>

<template>
  <div class="contribution-graph">
    <div class="graph-header">
      <h2>{{ totalContributions }} {{title}} in {{ selectedYear }}</h2>
      <YearSelector
        v-model="selectedYear"
        :years="availableYears"
      />
    </div>
    <div class="graph-container">
      <div class="weekday-labels">
        <span>Mon</span>
        <span>Wed</span>
        <span>Fri</span>
      </div>
      <div class="w-full overflow-x-auto">
        <div class="flex flex-col w-max">
          <MonthLabels />
          <div class="weeks-container">
            <div v-for="(week, weekIndex) in weeks" :key="weekIndex" class="week">
              <ContributionCell
                v-for="day in week"
                :key="day.date.toISOString()"
                :level="day.level"
                :count="day.count"
                :date="day.date"
              />
            </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
.contribution-graph {
  background-color: #0d1117;
  padding: 20px;
  border-radius: 6px;
}

.graph-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.graph-header h2 {
  font-size: 16px;
  font-weight: 400;
  color: #c9d1d9;
  margin: 0;
}

.graph-container {
  display: flex;
  gap: 8px;
}

.weekday-labels {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 4px;
  color: #7d8590;
  font-size: 12px;
  height: 100px;
}

.weeks-container {
  display: flex;
  gap: 2px;
  flex-wrap: nowrap;
  overflow-x: auto;
}

.week {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex-shrink: 0;
}
</style>