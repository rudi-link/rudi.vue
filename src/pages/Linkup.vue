<script setup>
import { computed, ref } from 'vue';
import Layout from '../components/Layout.vue';
import LinkupIndex from '../components/LinkupIndex.vue';

const service = ref(1)

</script>

<template>
    <Layout with-profile>
        <template #main>
            <div class="flex flex-col flex-grow gap-10 h-full">
                <div
                    class="flex justify-between items-center w-full h-max py-5 px-6 rounded-xl bg-indigo-700/70 text-white">
                    <div class="flex flex-col flex-grow flex-wrap gap-5 max-w-[60%]">
                        <p class="text-2xl font-bold leading-8">Lorem ipsum dolor sit amet <br> consectetur adipisicing.
                        </p>
                        <p class="leading-7">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis animi
                            iure maiores et.</p>
                        <div class="flex gap-4">
                            <button
                                class="py-2 px-5 border rounded-full font-bold text-sm bg-white text-neutral-900">action
                                1</button>
                            <button class="py-2 px-5 rounded-full font-bold text-sm border border-white">action
                                2</button>
                        </div>
                    </div>

                    <div class="w-max h-max">
                        <img src="/js.png" alt="" class="w-auto h-[10rem]">
                    </div>
                </div>

                <div class="flex flex-col gap-6 w-full h-max">
                    <div class="flex items-center">
                        <div @click="service = 1" class="flex flex-col gap-1 w-max cursor-pointer">
                            <div to="" class="text-center pr-10 transition-all"
                                :class="service !== 1 && 'text-neutral-600'">Service 1</div>
                            <div class="w-full h-1 transition-all"
                                :class="service === 1 ? 'bg-indigo-400' : 'bg-neutral-100'"></div>
                        </div>
                        <div @click="service = 2" class="flex flex-col gap-1 w-max cursor-pointer">
                            <div to="?service=2" class="text-center px-5 transition-all"
                                :class="service !== 2 && 'text-neutral-600'">Service 2</div>
                            <div class="w-full h-1 transition-all"
                                :class="service === 2 ? 'bg-indigo-400' : 'bg-neutral-100'"></div>
                        </div>
                    </div>
                    <linkup-index v-if="service === 1" />
                </div>
            </div>
        </template>
    </Layout>
</template>