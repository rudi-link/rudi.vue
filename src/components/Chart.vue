<template>
  <CChart
    type="line"
    :wrapper="false"
    :data="chartData"
  />
</template>

<script>
import { CChart } from '@coreui/vue-chartjs';
import { ref, computed } from 'vue';

export default {
  setup() {
    const dataToChart = ref({
      id: 2,
      name: 'default',
      linkId: 'juma',
      click: [
        { id: 'cm2bijnw00001b0l2crt4tjtd', createdAt: '2024-10-16T06:50:53.201Z', tagId: 2 },
        { id: 'cm24kzlnd0001a0izetf3j821', createdAt: '2024-10-11T10:24:52.825Z', tagId: 2 },
        { id: 'cm24f3txx0001vs746s9ov0o7', createdAt: '2024-10-11T07:40:12.501Z', tagId: 2 },
        { id: 'cm236nlsg0007hw995b28tmjc', createdAt: '2024-10-10T10:55:52.336Z', tagId: 2 },
      ],
    });

    // Transformer les données pour le chart
    const chartData = computed(() => {
      const labels = dataToChart.value.click.map(item =>
        new Date(item.createdAt).toLocaleDateString()
      );
      const datasetData = dataToChart.value.click.map(item => item.tagId);

      return {
        labels,
        datasets: [
          {
            label: 'Click Data',
            backgroundColor: 'rgba(151, 187, 205, 0.2)',
            borderColor: 'rgba(151, 187, 205, 1)',
            pointBackgroundColor: 'rgba(151, 187, 205, 1)',
            pointBorderColor: '#fff',
            data: datasetData,
          },
        ],
      };
    });

    return {
      chartData,
    };
  },
};
</script>
