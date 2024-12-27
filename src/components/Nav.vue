<script setup>
import { HomeIcon, ArrowUpRightIcon } from '@heroicons/vue/24/solid';
import useLocalStorage from '../composables/useLocalStorage';

const navTheme= useLocalStorage<'center' | 'right'>('nav-theme')
</script>

<template>
    <nav class="hidden sm:block w-max h-full">
        <div class="flex flex-col gap-3 h-full w-max py-5 px-2" :style="{borderTop: 'none'}">
            <RouterLink to="/" class="w-max px-3 py-3 bg-white rounded-xl shadow" title="home">
                <HomeIcon class="w-4 h-4 fill-indigo-500/60" />
            </RouterLink>
            <RouterLink to="/linkup" class="w-max px-3 py-3 bg-white rounded-xl shadow" title="linkup">
                <img src="/linkup.svg" class="w-4 h-4" />
            </RouterLink>
            <RouterLink to="/analytic" class="w-max px-3 py-3 bg-white rounded-xl shadow">
                <img src="/analytic.svg" class="w-4 h-4" />
            </RouterLink>
            <div class="flex items-center gap-3 -translate-x-9 translate-y-12 -rotate-90 bg-white rounded-2xl shadow p-3">
                <img src="/mr.js.png" class="w-5 h-5 rounded-full" />
                <div class="hidden sm:flex flex-col">
                  <div class=" text-xs">Developer</div>
                </div>
            </div>
        </div>
    </nav>

    <nav class="fixed z-10 bottom-6 left-[50%] -translate-x-[50%] sm:hidden block w-max h-max rounded-2xl backdrop-blur-sm bg-white/60 shadow-lg">
        <div class="flex justify-center gap-4 h-max w-full py-2 px-4" :style="{borderTop: 'none'}">
            <RouterLink to="/" class="w-max px-3 py-3 bg-white rounded-xl shadow" title="home">
                <HomeIcon class="w-4 h-4 fill-indigo-500/60" />
            </RouterLink>
            <RouterLink to="/linkup" class="w-max px-3 py-3 bg-white rounded-xl shadow" title="linkup">
                <img src="/linkup.svg" class="w-4 h-4" />
            </RouterLink>
            <RouterLink to="/analytic" class="w-max px-3 py-3 bg-white rounded-xl shadow">
                <img src="/analytic.svg" class="w-4 h-4" />
            </RouterLink>
            <button class="px-3 py-3 bg-white rounded-xl shadow">
                <ArrowUpRightIcon class="w-4 h-4 fill-indigo-500/70" />
            </button>
        </div>
    </nav>
</template>