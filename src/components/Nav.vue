<script setup>
import { HomeIcon, BellIcon } from '@heroicons/vue/24/solid';
</script>

<template>
    <nav class="w-max h-full ">
        <div class="flex flex-col gap-3 h-full w-max py-5 border-2 bg-neutral-100" :style="{borderTop: 'none'}">
            <RouterLink to="/" class="px-5 py-3" title="home">
                <HomeIcon class="w-4 h-4 text-neutral-700 hover:fill-indigo-500" />
            </RouterLink>
            <RouterLink to="/linkup" class="px-5 py-3" title="linkup">
                <BellIcon class="w-4 h-4 text-neutral-700 hover:fill-indigo-500" />
            </RouterLink>
            <RouterLink to="" class="px-5 py-3">
                <HomeIcon class="w-4 h-4 text-neutral-700 hover:fill-indigo-500" />
            </RouterLink>
            <RouterLink to="" class="px-5 py-3">
                <BellIcon class="w-4 h-4 text-neutral-700 hover:fill-indigo-500" />
            </RouterLink>
        </div>
    </nav>
</template>