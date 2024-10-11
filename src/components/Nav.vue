<script setup>
import { HomeIcon, BellIcon } from '@heroicons/vue/24/solid';
</script>

<template>
    <nav class="hidden sm:block w-max h-full">
        <div class="flex flex-col gap-3 h-full w-max py-5 px-2" :style="{borderTop: 'none'}">
            <RouterLink to="/" class="px-3 py-3 bg-white rounded-xl shadow" title="home">
                <HomeIcon class="w-4 h-4 fill-indigo-500/60" />
            </RouterLink>
            <RouterLink to="/linkup" class="px-3 py-3 bg-white rounded-xl shadow" title="linkup">
                <BellIcon class="w-4 h-4 fill-emerald-500/60" />
            </RouterLink>
            <RouterLink to="" class="px-3 py-3 bg-white rounded-xl shadow">
                <HomeIcon class="w-4 h-4 fill-orange-500/60" />
            </RouterLink>
            <RouterLink to="" class="px-3 py-3 bg-white rounded-xl shadow">
                <BellIcon class="w-4 h-4 fill-indigo-500/60" />
            </RouterLink>
        </div>
    </nav>

    <nav class="fixed z-10 bottom-6 left-[50%] -translate-x-[50%] sm:hidden block w-max h-max rounded-2xl backdrop-blur-sm bg-white/60 shadow-lg">
        <div class="flex justify-center gap-4 h-max w-full py-2 px-4" :style="{borderTop: 'none'}">
            <RouterLink to="/" class="px-3 py-3 bg-white rounded-xl shadow" title="home">
                <HomeIcon class="w-4 h-4 fill-indigo-500/70" />
            </RouterLink>
            <RouterLink to="/linkup" class="px-3 py-3 bg-white rounded-xl shadow" title="linkup">
                <BellIcon class="w-4 h-4 fill-emerald-500/70" />
            </RouterLink>
            <RouterLink to="" class="px-3 py-3 bg-white rounded-xl shadow">
                <HomeIcon class="w-4 h-4 fill-orange-500/70" />
            </RouterLink>
            <RouterLink to="" class="px-3 py-3 bg-white rounded-xl shadow">
                <BellIcon class="w-4 h-4 fill-indigo-500/70" />
            </RouterLink>
        </div>
    </nav>
</template>