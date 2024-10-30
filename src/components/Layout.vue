<script setup lang="ts">
import Nav from "../components/Nav.vue";
import { useQueryParams } from "../composables/useQueryParams";
import useAuth from "../store/auth";
import { RocketLaunchIcon } from "@heroicons/vue/24/solid";
import Profile from "./modals/Profile.vue";

const { getQueryParam } = useQueryParams();

const edit = getQueryParam("edit");

const authStore = useAuth()
authStore.authenticate()

const {withProfile = false} = defineProps<{withProfile?: boolean}>()

</script>

<template>
    <div v-if="authStore.user" class="flex flex-col w-full h-full">
        <header class="flex flex-col gap-7 w-full h-max py-1 px-4 bg-neutral-100 border-b shadow-lg">
            <div class="flex justify-between w-full h-max">
                <div class="flex items-center gap-4">
                    <div class="w-9 h-9 rounded-xl bg-white shadow-lg">
                        <i class="w-full h-full p-3" />
                    </div>
                    <div class="flex flex-col">
                        <div class="font-bold text-indigo-600">Rudi</div>
                        <div class="text-xs text-neutral-500 font-mono">version 1.0.0</div>
                    </div>
                </div>

                <div class="flex items-center gap-4">
                    <div class="flex items-center gap-3 sm:p-2 rounded-full sm:bg-white">
                        <div class="flex items-center gap-3">
                            <img src="/mr.js.png" class="w-5 h-5 rounded-full" />
                            <div class="hidden sm:flex flex-col">
                                <div class="font-bold text-xs">Developer</div>
                            </div>
                        </div>
                    </div>
                    <div class="w-8 h-8 p-2 rounded-2xl bg-white shadow-sm">
                        <RocketLaunchIcon class="w-full h-full blip" />
                    </div>
                    <div class="w-8 h-8 rounded-2xl bg-white shadow-sm">
                        <i class="w-full h-full p-3" />
                    </div>
                    <RouterLink to="" class="p-1 rounded-full bg-white">
                        <img :src="authStore?.user?.avatar" alt="" class="w-10 h-10 rounded-full">
                    </RouterLink>
                </div>
            </div>
        </header>
        <Profile v-if="Boolean(edit)"/>
        <div class="flex sm:flex-row flex-col-reverse w-full h-full bg-white">
            <Nav />
            <main class="flex justify-between gap-6 w-full h-full p-5 overflow-y-auto">
                <slot name="main"></slot>
                <slot name="side" v-if="!withProfile"></slot>
                
                <div v-if="withProfile" class="hidden md:flex flex-col gap-1 w-max h-max">
                    <RouterLink to="?edit=profile" class="p-[0.5rem] text-center rounded-t-2xl rounded-b-xl bg-[#4c1b6dab] text-white hover:animate-pulse transition-all">
                        edit profile
                    </RouterLink>
                    <!-- <div
                        class="w-max h-max  border-slate-300 p-[0.15rem] rounded-lg bg-gradient-to-br from-white via-white to-[#3e1758ab]"> -->
                        <div
                            class="flex flex-col gap-5 items-center py-4 px-4 w-max min-w-36 h-max min-h-10  bg-indigo-50 rounded-lg">
                            <div class="flex flex-col items-center gap-3 w-max">
                                <img :src="authStore?.user?.avatar" alt="" class="w-16 h-16 rounded-full">
                                <p class="text-sm font-mono font-bold text-neutral-700">{{ authStore?.user?.name }}</p>
                            </div>
                            <div class="flex justify-center gap-5">
                                <div class="flex flex-col items-center">
                                    <div class="text-sm text-neutral-700">item slote</div>
                                    <div class="font-mono font-bold">6</div>
                                </div>
                                <div class="flex flex-col items-center">
                                    <div class="text-sm text-neutral-700">item slote</div>
                                    <div class="font-mono font-bold">6</div>
                                </div>
                                <div class="flex flex-col items-center">
                                    <div class="text-sm text-neutral-700">item slote</div>
                                    <div class="font-mono font-bold">6</div>
                                </div>
                            </div>
                        </div>
                    <!-- </div> -->
                </div>

            </main>
        </div>
    </div>
</template>