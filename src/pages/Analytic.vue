<script setup lang="ts">
import { computed } from 'vue';
import Layout from '../components/Layout.vue';
import { useQueryParams } from '../composables/useQueryParams';
import useAuth from '../store/auth';
import NewAnalytic from '../components/NewAnalytic.vue';
import AnalyticIndex from '../components/AnalyticIndex.vue';

const { getQueryParam } = useQueryParams();
const new_ = computed(() => getQueryParam("new"));

const authStore = useAuth()
authStore.authenticate()
</script>

<template>
    <Layout with-profile>
        <template #main>
          <div class="flex flex-col flex-grow gap-10 h-full">
            <div
              class="flex justify-between items-center w-full h-max py-5 px-6 rounded-xl bg-[#2e6b9cfa] text-white"
            >
              <div
                class="flex flex-col flex-grow flex-wrap gap-5 sm:max-w-[60%] w-full"
              >
                <p class="text-2xl font-bold leading-8">
                  Trojan horse
                </p>
                <p class="leading-7">
                  Integrate in your app some code, to analyse all visitor and some else
                </p>
                <div class="flex gap-4" v-if="!new_">
                  <RouterLink
                    to="?new=link"
                    class="py-2 px-5 border rounded-full font-bold text-sm bg-white text-indigo-700 hover:bg-transparent hover:text-white hover:border border-white transition-all"
                  >new project</RouterLink>
                  <RouterLink
                    to="/"
                    class="py-2 px-5 rounded-full font-bold text-sm border border-white"
                  >back</RouterLink>
                </div>
                <new-analytic v-if="new_" />
              </div>
    
              <div class="hidden sm:block w-max h-max">
                <img src="/js.png" alt="" class="w-auto h-[10rem]" />
              </div>
            </div>
    
            <div v-if="!new_" class="flex flex-col gap-5 w-full h-max">
              <analytic-index />
            </div>
          </div>
        </template>
      </Layout>
</template>