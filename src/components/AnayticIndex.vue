<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getLink } from "../api/link";
import { TLink } from "../types";
import { ClipboardDocumentCheckIcon } from "@heroicons/vue/24/solid";
import { api } from "../api";
import useCopy from "../composables/useCopy";

const {copy} = useCopy()

const links = ref<TLink[]>([]);

onMounted(async () => {
    const res = await getLink<TLink[]>()
    links.value = res
})

</script>

<template>
  <div class="flex flex-wrap items-start gap-4 w-full h-max">
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
          :src="`https://api.dicebear.com/9.x/identicon/svg?seed=${link.id}`"
          alt=""
          class="w-full h-full rounded-full border-2 border-white"
        />
      </div>
      <div class="flex flex-col gap-[0.3rem]">
        <RouterLink :to="`/linkup/${link.id}`" class="hover:text-indigo-700 hover:underline underline-offset-4">{{ link.website.split("://")[1].split(".")[0] }}</RouterLink>
        <div @click="copy(`${api}/${link.id}`)" title="copy" class="flex items-center gap-3 italic text-sm text-neutral-700 hover:scale-x-90 transition-all">{{ `${api}/${link.id}` }} <ClipboardDocumentCheckIcon class="w-4 h-4"/></div>
      </div>
    </div>
  </div>
</template>
