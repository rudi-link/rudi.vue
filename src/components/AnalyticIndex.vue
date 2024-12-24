<script setup lang="ts">
import { onMounted, ref } from "vue";
import { TAnalytic } from "../types";
import { getAllAnalytic } from "../api/analytic";

const visite = ref<TAnalytic[]>([]);

onMounted(async () => {
  const res = await getAllAnalytic<TAnalytic[]>()
  visite.value = res
})

</script>

<template>
  <div class="flex flex-wrap items-start gap-4 w-full h-max">
    <div
      v-for="vs in visite"
      :key="vs.id"
      class="flex items-center gap-5 border w-full sm:w-max h-max py-4 px-3 rounded-xl bg-indigo-50 transition-all cursor-pointer shadow"
      :class="{'bg-[#75b5ff94]': !vs.checked}"
    >
      <div class="flex flex-col gap-[0.3rem]">
        <RouterLink :to="`/linkup/${vs.id}`" class="hover:text-indigo-700 hover:underline underline-offset-4">{{ vs.name }}</RouterLink>
      </div>
    </div>
  </div>
</template>
