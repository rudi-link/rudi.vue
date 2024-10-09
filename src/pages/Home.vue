<script setup>
import Layout from "../components/Layout.vue";
import Nav from "../components/Nav.vue";
import useAuth from "../store/auth";
import { RocketLaunchIcon } from "@heroicons/vue/24/solid";
import { HomeIcon, BellIcon } from "@heroicons/vue/24/solid";

const authStore = useAuth()
authStore.authenticate()

</script>

<template>
    <Layout with-profile>
        <template #main>
            <div class="flex flex-col flex-grow gap-5 h-full">
                <div class="flex justify-between w-full">
                    <div class="text-2xl font-bold text-neutral-800">Features</div>
                    <button class="text-sm italic underline">hide ></button>
                </div>

                <div class="flex md:flex-nowrap flex-wrap gap-3 w-full h-max">
                    <RouterLink
                        class="flex flex-col items-center gap-4 px-3 py-4 md:w-[35%] w-full h-44 rounded-lg bg-indigo-700/70">
                        <div class="w-10 h-10 p-2 rounded-full bg-white shadow-sm">
                            <RocketLaunchIcon class="w-full h-full blip" />
                        </div>
                        <div class="text-center text-white font-bold">Lorem ipsum consectetur</div>
                        <p class="text-center text-white/80 text-sm">Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Vel, dolore.</p>
                    </RouterLink>
                    <RouterLink to="/linkup"
                        class="flex flex-col md:w-[35%] w-full h-44 hover:border-none rounded-lg shadow hover:shadow-lg transition-all overflow-hidden cardo">
                        <div class="flex items-center justify-center gap-8 w-full h-full bg-indigo-50">
                            <div class="w-8 h-8 p-2 rounded-full shadow-sm bg-sky-300/50">
                                <HomeIcon class="w-full h-full fill-sky-500" />
                            </div>

                            <div class="w-8 h-8 p-2 rounded-full shadow-sm bg-orange-300/50">
                                <BellIcon class="w-full h-full fill-orange-500" />
                            </div>
                        </div>
                        <div class="flex flex-col w-full h-max p-4 border bg-white">
                            <div>
                                <div class="font-bold">feature 1</div>
                                <p class="text-sm">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </RouterLink>
                    <RouterLink
                        class="flex flex-col md:w-[35%] w-full h-44 hover:border-none rounded-lg shadow hover:shadow-lg transition-all overflow-hidden cardo">
                        <div class="flex items-center justify-center gap-8 w-full h-full bg-indigo-50">
                            <div class="w-8 h-8 p-2 rounded-full shadow-sm bg-emerald-300/50">
                                <HomeIcon class="w-full h-full fill-emerald-500" />
                            </div>

                            <div class="w-8 h-8 p-2 rounded-full shadow-sm bg-pink-300/50">
                                <BellIcon class="w-full h-full fill-pink-500" />
                            </div>
                        </div>
                        <div class="flex flex-col w-full h-max p-4 border bg-white">
                            <div>
                                <div class="font-bold">feature 2</div>
                                <p class="text-sm">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </template>
    </layout>
</template>