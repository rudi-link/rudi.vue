<script setup lang="ts">
import { computed, ref } from 'vue';
import Layout from '../components/Layout.vue';
import LinkupIndex from '../components/LinkupIndex.vue';
import { CodeBracketIcon, LinkIcon, PlusCircleIcon, PlusIcon, LockClosedIcon, LockOpenIcon } from '@heroicons/vue/24/solid';
import { useQueryParams } from '../composables/useQueryParams';
import NewLinkup from '../components/NewLinkup.vue';

const service = ref(1)
const {setQueryParam, removeQueryParam, getQueryParam} = useQueryParams()
const new_ = computed(() => getQueryParam('new'))

</script>

<template>
    <Layout with-profile>
        <template #main>
            <div class="flex flex-col flex-grow gap-10 h-full">
                <div class="flex justify-between items-center w-full h-max py-5 px-6 rounded-xl bg-indigo-700/80 text-white">
                    <div class="flex flex-col flex-grow flex-wrap gap-5 sm:max-w-[60%] w-full">
                        <p class="text-2xl font-bold leading-8">Lorem ipsum dolor sit amet <br> consectetur adipisicing.
                        </p>
                        <p class="leading-7">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis animiiure maiores et.</p>
                        <div class="flex gap-4" v-if="!new_">
                            <RouterLink to="?new=link" class="py-2 px-5 border rounded-full font-bold text-sm bg-white text-indigo-700">new link</RouterLink>
                            <RouterLink to="?new=package" class="py-2 px-5 rounded-full font-bold text-sm border border-white">new package</RouterLink>
                        </div>
                        <new-linkup v-if="new_"/>
                    </div>

                    <div class="hidden sm:block w-max h-max">
                        <img src="/js.png" alt="" class="w-auto h-[10rem]">
                    </div>
                </div>

                <div class="flex flex-col gap-5 w-full h-max">
                    <div class="flex justify-between w-full">
                       <div class="flex items-center">
                            <div @click="service = 1; removeQueryParam('new')" class="flex flex-col gap-1 w-max cursor-pointer">
                                <div to="" class="text-center pr-10 transition-all"
                                    :class="service !== 1 && 'text-neutral-600'">Service 1</div>
                                <div class="w-full h-1 transition-all"
                                    :class="service === 1 ? 'bg-indigo-400' : 'bg-neutral-100'"></div>
                            </div>
                            <div @click="service = 2; removeQueryParam('new')" class="flex flex-col gap-1 w-max cursor-pointer">
                                <div to="?service=2" class="text-center px-5 transition-all"
                                    :class="service !== 2 && 'text-neutral-600'">Service 2</div>
                                <div class="w-full h-1 transition-all"
                                    :class="service === 2 ? 'bg-indigo-400' : 'bg-neutral-100'"></div>
                            </div>
                       </div>
                       <button @click="setQueryParam('new', service === 1 ? 'link' : 'package')" class="flex items-center gap-2 font-bold italic hover:underline underline-offset-4 text-indigo-700/90">
                        <LinkIcon class="sm:w-4 sm:h-4 w-6 h-6" v-if="service===1"/>
                        <CodeBracketIcon class="sm:w-4 sm:h-4 w-6 h-6" v-if="service===2"/>
                        <span class="sm:block hidden">new {{service === 1 ? 'link' : 'package'}}</span>
                       </button>
                    </div>
                    <linkup-index v-if="service === 1" />
                </div>
            </div>
        </template>
    </Layout>
</template>