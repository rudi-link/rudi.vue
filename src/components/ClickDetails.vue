<script setup lang="ts">
import { computed } from "vue";
import { TLinkDt, TTagDt } from "../types";
import useCopy from "../composables/useCopy";
import { api } from "../api";
import { ClipboardDocumentCheckIcon } from "@heroicons/vue/24/solid";
// @ts-ignore
import ContributionGraph from "./ContributionGraph.vue";
// import ApexCharts from 'apexcharts'
// import Chart from "./Chart.vue";

const { copy } = useCopy();

const { link, idTag, cancel } = defineProps<{
  link: TLinkDt | undefined;
  idTag: number;
  cancel: () => void;
}>();

const tag = computed<TTagDt | undefined>(() =>
  link?.tag.find((t) => t.id === idTag)
);

</script>

<template>
  <div
    class="absolute z-30 flex justify-center w-full h-full inset-0 backdrop-blur-sm bg-black/20 overflow-hidden"
  >
    <div class="w-[40rem] h-full p-3 side">
      <div class="flex flex-col gap-7 w-full h-full p-5 rounded-lg bg-white">

        <div class="w-full text-center">
          <button @click="cancel()">✖️</button>
        </div>

        <div class="flex flex-wrap items-center justify-between gap-2 w-full">
          <h2 class="font-mono">
            {{ link?.website.split("://")[1].split(".")[0] }}|
            <span class="font-bold text-[#4f1575ab]">{{ tag?.name }}</span> 🌐
          </h2>
          <button
            :title="`Copy: ${api}/${link?.id}@${tag?.id}`"
            @click="copy(`${api}/${link?.id}@${tag?.id}`)"
            class="flex items-center gap-3 italic text-sm text-[#4f1575ab] hover:scale-x-90 transition-all"
          >
            <ClipboardDocumentCheckIcon class="w-6 h-6" />
          </button>
        </div>
        <ContributionGraph :contributions="tag?.click" />
        <!-- <Contribution :contributions="tag?.click"/> -->
        <!-- <div class="flex flex-wrap gap-3">
          <div v-for="clk in tag?.click" :key="clk.id" class="w-full sm:w-max h-max border p-3 rounded shadow">
            🖱️ {{ formatdAte(clk.createdAt) }}
          </div>
        </div> -->

        <!-- <CChartLine
          type="line"
          :wrapper="false"
          :data="{
            labels: tag?.click.map(clk => ''),
            datasets: [
              {
                label: 'Click',
                backgroundColor: 'rgba(151, 187, 205, 0.2)',
                borderColor: 'rgba(151, 187, 205, 1)',
                pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                pointBorderColor: '#fff',
                data: [50, 12, 28, 29, 7, 25, 100],
              },
            ],
          }"
        /> -->
      </div>
    </div>
  </div>
</template>
