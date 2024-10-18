<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import Layout from "../components/Layout.vue";
import { getLink } from "../api/link";
import { TLinkDt, TTag } from "../types";
import { LinkIcon } from "@heroicons/vue/24/solid";
import ClickDetails from "../components/ClickDetails.vue";
import { useQueryParams } from "../composables/useQueryParams";

const { getQueryParam, removeQueryParam } = useQueryParams();
const idTag = computed(() => Number(getQueryParam("tag")));

const { id } = defineProps<{ id: string }>();

const link = ref<TLinkDt>();
const tag = ref<any>();

onMounted(async () => {
  const res = await getLink<TLinkDt>(id);
  link.value = res;
  tag.value = link.value?.tag.find((t) => t.id === idTag.value);
});
</script>

<template>
  <Layout with-profile>
    <template #main>
      <ClickDetails
        :tag="tag"
        :cancel="() => removeQueryParam('tag')"
        v-if="Boolean(idTag)"
      />

      <div class="flex flex-col flex-grow gap-10 h-full">
        <div
          class="flex flex-col justify-between items-center gap-8 w-full h-max py-5 px-6 rounded-xl bg-[#391c4ea9] text-white"
        >
          <div class="flex justify-between w-full">
            <h1
              class="flex items-center gap-2 text-lg font-bold hover:underline"
            >
              <span class="text-2xl text-orange-300">#</span> {{ id }}
            </h1>
          </div>

          <div class="flex justify-start gap-3 w-full">
            <RouterLink
              :to="`?tag=${tag.id}`"
              v-for="tag in link?.tag"
              :key="tag.id"
              class="flex flex-col items-center gap-3 w-max min-w-36 p-2 border rounded bg-white/30"
            >
              <h3 class="flex items-center justify-between w-full">
                <span>{{ tag.name }}</span>
                <LinkIcon class="w-4 h-4" />
              </h3>
              <h2 class="text-3xl font-mono">
                {{ tag.click.length }}
              </h2>
            </RouterLink>
          </div>
        </div>
      </div>
    </template>
  </Layout>
</template>
