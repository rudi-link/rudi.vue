<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import Layout from "../components/Layout.vue";
import { getLink } from "../api/link";
import { TAnalytic, TLinkDt, TTag } from "../types";
import { LinkIcon } from "@heroicons/vue/24/solid";
import ClickDetails from "../components/ClickDetails.vue";
import { useQueryParams } from "../composables/useQueryParams";
import { getAnalytic } from "../api/analytic";
import ContributionGraph from "../components/ContributionGraph.vue";

const { getQueryParam } = useQueryParams();
const idTag = computed(() => Number(getQueryParam("tag")));

const { id } = defineProps<{ id: string }>();

const analytic = ref<TAnalytic>()

onMounted(async () => {
  const res = await getAnalytic(id);
  analytic.value = res;
});
</script>

<template>
  <Layout with-profile>
    <template #main>
      <div
      class="absolute flex justify-center w-full h-full inset-0 backdrop-blur-sm bg-black/20 overflow-hidden"
    >
      <div class="w-[40rem] h-full p-3 side">
        <div class="flex flex-col gap-7 w-full h-full p-5 rounded-lg bg-white">
  
          <div class="w-full text-center">
            <!-- <button @click="cancel()">✖️</button> -->
          </div>
  
          <div class="flex flex-wrap items-center justify-between gap-2 w-full">
            <!-- <h2 class="font-mono">
              {{ link?.website.split("://")[1].split(".")[0] }}|
              <span class="font-bold text-[#4f1575ab]">{{ }}</span> 🌐
            </h2> -->
            <button
              
              class="flex items-center gap-3 italic text-sm text-[#4f1575ab] hover:scale-x-90 transition-all"
            >
              <ClipboardDocumentCheckIcon class="w-6 h-6" />
            </button>
          </div>
          <ContributionGraph :contributions="analytic?.visiter" />
        </div>
      </div>
    </div>
    </template>
  </Layout>
</template>
