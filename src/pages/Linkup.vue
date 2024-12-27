<script setup lang="ts">
import { computed } from "vue";
// @ts-ignore
import Layout from "../components/Layout.vue";
// @ts-ignore
import LinkupIndex from "../components/LinkupIndex.vue";
import { useQueryParams } from "../composables/useQueryParams";
// @ts-ignore
import NewLinkup from "../components/NewLinkup.vue";
import useAuth from "../store/auth";

const authStore = useAuth()
authStore.authenticate()

const { getQueryParam } = useQueryParams();
const new_ = computed(() => getQueryParam("new"));
</script>

<template>
  <Layout with-profile>
    <template #main>
      <div class="flex flex-col flex-grow gap-10 h-full md:pr-10">
        <div
          class="flex justify-between items-center w-full h-max py-5 px-6 rounded-xl bg-[#3e1758cc] text-white"
        >
          <div
            class="flex flex-col flex-grow flex-wrap gap-5 sm:max-w-[60%] w-full"
          >
            <p class="text-2xl font-bold leading-8">
              LinkUp
            </p>
            <p class="leading-7">
              Feature that allow you to create a link from another, <br> see how many click on it
            </p>
            <div class="flex gap-4" v-if="!new_">
              <RouterLink
                to="?new=link"
                class="py-2 px-5 border rounded-full font-bold text-sm bg-white text-indigo-700 hover:bg-transparent hover:text-white hover:border border-white transition-all"
                >new link</RouterLink
              >
              <RouterLink
                to="/"
                class="py-2 px-5 rounded-full font-bold text-sm border border-white"
                >back</RouterLink
              >
            </div>
            <new-linkup v-if="new_" />
          </div>

          <div class="hidden sm:block w-max h-max">
            <img src="/logo2.png" alt="" class="w-auto h-[10rem]" />
          </div>
        </div>

        <div v-if="!new_" class="flex flex-col gap-5 w-full h-max">
          <linkup-index />
        </div>
      </div>
    </template>
  </Layout>
</template>
