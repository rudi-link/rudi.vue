<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { getLink } from "../api/link";
import { TLink } from "../types";
import { useQueryParams } from "../composables/useQueryParams";
import LinkupDetails from "./LinkupDetails.vue";
import { ArrowUpRightIcon, ClipboardDocumentCheckIcon } from "@heroicons/vue/24/solid";
import { api } from "../api";

const { getQueryParam, removeQueryParam } = useQueryParams();
const links = ref<TLink[]>([]);

const linkId = computed(() => getQueryParam('id') as string)

onMounted(async () => {
    const res = await getLink<TLink[]>()
    links.value = res
})

</script>

<template>
  <div class="flex flex-wrap items-start gap-4 w-full h-max">
    <linkup-details :id="linkId" :cancel="() => removeQueryParam('id')" />
    <div
      v-for="link in links"
      :key="link.id"
      class="flex items-center gap-5 border w-full sm:w-max h-max py-2 px-3 rounded-xl bg-indigo-50 transition-all cursor-pointer shadow"
    >
      <div
        class="w-12 h-12 border-2 rounded-full overflow-hidden"
        :class="{ 'border-indigo-600': !link.checked }"
      >
        <img
          src="/mr.js.png"
          alt=""
          class="w-full h-full rounded-full border-4 border-white"
        />
      </div>
      <div class="flex flex-col gap-[0.3rem]">
        <RouterLink :to="`?id=${link.id}`" class="hover:text-indigo-700 hover:underline underline-offset-4">{{ link.website.split("://")[1].split(".")[0] }}</RouterLink>
        <div title="copy" class="flex items-center gap-3 italic text-sm text-neutral-700 hover:scale-x-90 transition-all">{{ `${api}/${link.id}` }} <ClipboardDocumentCheckIcon class="w-4 h-4"/></div>
      </div>
    </div>
  </div>
</template>
